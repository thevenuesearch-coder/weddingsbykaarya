from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from twilio.rest import Client as TwilioClient
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Weddings by Kaarya API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    wedding_date: Optional[str] = None
    location: Optional[str] = None
    guest_count: Optional[str] = None
    services: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class InquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    wedding_date: Optional[str] = None
    location: Optional[str] = None
    guest_count: Optional[str] = None
    services: Optional[str] = None
    message: Optional[str] = None


# ---------- Notifications (opt-in, fail-safe) ----------
logger = logging.getLogger(__name__)


def _send_email_alert(inq: Inquiry):
    api_key = os.environ.get("RESEND_API_KEY")
    to_email = os.environ.get("ALERT_EMAIL")
    if not api_key or not to_email:
        return  # not configured — skip silently
    resend.api_key = api_key
    rows = "".join(
        f"<tr><td style='padding:6px 12px;color:#8a6a3f;font-family:Arial;font-size:13px'>{k}</td>"
        f"<td style='padding:6px 12px;color:#2b2b2b;font-family:Arial;font-size:14px'>{v or '-'}</td></tr>"
        for k, v in [
            ("Name", inq.name), ("Email", inq.email), ("Phone", inq.phone),
            ("Wedding Date", inq.wedding_date), ("Destination", inq.location),
            ("Guest Count", inq.guest_count), ("Services", inq.services), ("Message", inq.message),
        ]
    )
    html = (
        "<div style='background:#4E1E27;padding:28px'>"
        "<div style='max-width:560px;margin:auto;background:#fff;border-top:4px solid #C9A46B'>"
        "<h2 style='font-family:Georgia,serif;color:#4E1E27;padding:20px 12px 0'>New Wedding Enquiry</h2>"
        "<p style='font-family:Arial;color:#8a6a3f;padding:0 12px'>Dream. Design. Deliver.</p>"
        f"<table style='width:100%;border-collapse:collapse;margin:12px 0'>{rows}</table>"
        "</div></div>"
    )
    resend.Emails.send({
        "from": os.environ.get("SENDER_EMAIL", "onboarding@resend.dev"),
        "to": [to_email],
        "subject": f"New Wedding Enquiry — {inq.name}",
        "html": html,
    })


def _send_whatsapp_alert(inq: Inquiry):
    sid = os.environ.get("TWILIO_ACCOUNT_SID")
    token = os.environ.get("TWILIO_AUTH_TOKEN")
    from_wa = os.environ.get("TWILIO_WHATSAPP_FROM")
    to_wa = os.environ.get("ALERT_WHATSAPP_TO")
    if not all([sid, token, from_wa, to_wa]):
        return  # not configured — skip silently
    twilio_client = TwilioClient(sid, token)
    body = (
        f"New Kaarya enquiry\nName: {inq.name}\nPhone: {inq.phone}\nEmail: {inq.email}\n"
        f"Destination: {inq.location or '-'}\nDate: {inq.wedding_date or '-'}\n"
        f"Services: {inq.services or '-'}"
    )
    twilio_client.messages.create(
        from_=f"whatsapp:{from_wa}" if not from_wa.startswith("whatsapp:") else from_wa,
        to=f"whatsapp:{to_wa}" if not to_wa.startswith("whatsapp:") else to_wa,
        body=body,
    )


async def send_alerts(inq: Inquiry):
    """Send email + WhatsApp alerts without blocking / failing the request."""
    for fn in (_send_email_alert, _send_whatsapp_alert):
        try:
            await asyncio.to_thread(fn, inq)
        except Exception as e:
            logger.error(f"Alert ({fn.__name__}) failed: {e}")


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Weddings by Kaarya — Dream. Design. Deliver."}


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    inquiry = Inquiry(**payload.model_dump())
    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.inquiries.insert_one(doc)
    # Fire-and-forget alerts (never block or fail the submission)
    asyncio.create_task(send_alerts(inquiry))
    return inquiry


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries():
    docs = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


@api_router.get("/inquiries/{inquiry_id}", response_model=Inquiry)
async def get_inquiry(inquiry_id: str):
    doc = await db.inquiries.find_one({"id": inquiry_id}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    if isinstance(doc.get('created_at'), str):
        doc['created_at'] = datetime.fromisoformat(doc['created_at'])
    return doc


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
