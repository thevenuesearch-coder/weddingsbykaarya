# PRD — Weddings by Kaarya

## Original Problem Statement
Award-worthy luxury Indian wedding planning website for "Weddings by Kaarya"
(tagline: Dream. Design. Deliver.). Royal maroon #4E1E27 / burgundy #5B2230 / antique gold #C9A46B /
ivory #F8F5EF / champagne #E8DAC8. No gradients/neon/glassmorphism. Cormorant Garamond + Inter.
Cinematic motion (framer-motion + lenis).

## Architecture
- Frontend: React 19 (craco), Tailwind, framer-motion, lenis, sonner. Long-scroll landing page.
- Backend: FastAPI + MongoDB (motor). Routes under /api.
  - POST/GET /api/inquiries, GET /api/inquiries/{id}.
  - Opt-in fail-safe alerts: Resend email + Twilio WhatsApp fired via asyncio.create_task + to_thread.

## Implemented
- Loader (drawing elephant + mandala + tagline).
- Cinematic hero: parallax palace, mandalas, marigold petals, diyas, masked headline, dual CTAs.
- Custom luxury cursor: trailing gold ring + ivory dot; hover morphs (link expand, image "View"/"Explore"
  label, dash on destination text); click pulse; hero foil shimmer; lotus micro-icon; desktop-only,
  reduced-motion + touch fallbacks. Hero CURSOR VIDEO REVEAL (muted looping wedding clip inside ring).
- About (numbered manifesto chapters). "Dream/Design/Deliver" editorial marquee.
- Signature DESTINATIONS (replaced Services): parallax + 3D tilt panels for Udaipur, Jaipur, Goa, Bali,
  Phuket, Maldives with insights + names marquee. Each has DESTINATION ENQUIRY button that pre-fills the
  contact form (location + services) via a window CustomEvent, with gold highlight + toast.
- Gallery (masonry, grayscale->color; lead image = user-uploaded bride photo). Wedding Journey timeline.
- Testimonials carousel, Instagram grid, FAQ accordion (mirrors JSON-LD FAQPage), Contact (working
  inquiry form -> backend), Footer. NAP: +91 97004 77049 / HelloKaarya@gmail.com.
- SEO: canonical, ~60 keyword phrases, geo meta, OG + Twitter cards, JSON-LD @graph
  (LocalBusiness/ProfessionalService 4.9/135, WebSite, BreadcrumbList, FAQPage). Verified valid.
- Inquiry Alerts (email + WhatsApp): built, INACTIVE until keys added to backend/.env. Verified graceful
  (testing_agent iteration_2: backend 100%).

## Activation Notes
- Email: set RESEND_API_KEY (+ verify domain for custom SENDER_EMAIL). Recipient: ALERT_EMAIL.
- WhatsApp: set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM. Recipient: ALERT_WHATSAPP_TO.
- Restart backend after editing .env.

## Backlog / Next
- Real Story: swap in real logo, films, destination/gallery photography (deferred by user).
- Admin dashboard for inquiries; list pagination (limit/offset).
- Set real production domain in canonical/JSON-LD + sitemap.xml.
