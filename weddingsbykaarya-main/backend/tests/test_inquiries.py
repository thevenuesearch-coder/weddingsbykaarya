"""Backend API tests for Weddings by Kaarya inquiries endpoints."""
import os
import time
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Read from frontend/.env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.strip().split("=", 1)[1].rstrip("/")
                break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        assert "Kaarya" in r.json().get("message", "")


# ---------- POST /api/inquiries ----------
class TestCreateInquiry:
    def test_create_valid(self, api_client):
        payload = {
            "name": "TEST_Ananya Sharma",
            "email": "test_ananya@example.com",
            "phone": "+91 9999999999",
            "wedding_date": "2026-11-20",
            "location": "Udaipur",
            "guest_count": "300",
            "services": "Full Planning",
            "message": "Looking for a dream wedding",
        }
        start = time.time()
        r = api_client.post(f"{API}/inquiries", json=payload)
        elapsed = time.time() - start
        assert r.status_code in (200, 201), r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert "_id" not in data
        # Fire-and-forget alerts must not block the response
        assert elapsed < 3.0, f"Response was too slow (alerts blocking?): {elapsed}s"
        pytest.created_id = data["id"]

    def test_create_minimal_payload(self, api_client):
        payload = {
            "name": "TEST_Minimal",
            "email": "test_min@example.com",
            "phone": "+919000000000",
        }
        r = api_client.post(f"{API}/inquiries", json=payload)
        assert r.status_code in (200, 201), r.text
        data = r.json()
        assert data["name"] == "TEST_Minimal"
        assert data["wedding_date"] is None
        assert data["location"] is None
        assert "id" in data
        assert "_id" not in data

    def test_invalid_email(self, api_client):
        r = api_client.post(f"{API}/inquiries", json={
            "name": "TEST_x", "email": "not-an-email", "phone": "123"
        })
        assert r.status_code == 422

    def test_missing_name(self, api_client):
        r = api_client.post(f"{API}/inquiries", json={
            "email": "test_x@example.com", "phone": "123"
        })
        assert r.status_code == 422

    def test_missing_email(self, api_client):
        r = api_client.post(f"{API}/inquiries", json={
            "name": "TEST_x", "phone": "123"
        })
        assert r.status_code == 422

    def test_missing_phone(self, api_client):
        r = api_client.post(f"{API}/inquiries", json={
            "name": "TEST_x", "email": "test_x@example.com"
        })
        assert r.status_code == 422


# ---------- GET /api/inquiries ----------
class TestListInquiries:
    def test_list_returns_created(self, api_client):
        r = api_client.get(f"{API}/inquiries")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 1
        # No mongo _id leakage
        for item in data:
            assert "_id" not in item
            assert "id" in item and "email" in item
        # Sorted newest first: created_at desc
        created_ats = [item["created_at"] for item in data]
        assert created_ats == sorted(created_ats, reverse=True)
        # Includes recently created
        ids = [i["id"] for i in data]
        assert getattr(pytest, "created_id", None) in ids


# ---------- GET /api/inquiries/{id} ----------
class TestGetInquiry:
    def test_get_by_id(self, api_client):
        iid = getattr(pytest, "created_id", None)
        assert iid, "No created inquiry id available"
        r = api_client.get(f"{API}/inquiries/{iid}")
        assert r.status_code == 200
        data = r.json()
        assert data["id"] == iid
        assert "_id" not in data

    def test_get_unknown_returns_404(self, api_client):
        r = api_client.get(f"{API}/inquiries/nonexistent-id-xyz-12345")
        assert r.status_code == 404
