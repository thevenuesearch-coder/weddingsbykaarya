import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { MapPin, CalendarDays, Sparkles, Landmark } from "lucide-react";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SignatureVenues from "@/components/SignatureVenues";
import MobileSignatureVenues from "@/components/MobileSignatureVenues";

import { DESTINATIONS } from "@/lib/data";

export default function DestinationDetails() {
  const { slug } = useParams();

const destination = useMemo(() => {
  return DESTINATIONS.find((item) => item.slug === slug);
}, [slug]);

if (!destination) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#4E1E27",
        color: "#fff",
      }}
    >
      Destination not found
    </div>
  );
}

  return (
  <div className="min-h-screen flex flex-col">

    {/* ================= MAIN CONTENT ================= */}
    <main className="flex-1">

      {/* ================= HERO ================= */}

      <section className="relative h-[90vh] overflow-hidden">

        {/* Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={destination.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Light Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.35), rgba(0,0,0,.45))",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-[1400px] mx-auto px-10 pb-24 w-full">

            <p
              className="uppercase tracking-[0.4em] text-sm"
              style={{ color: "#C9A46B" }}
            >
              {destination.country}
            </p>

            <h1
              className="font-serif-display text-7xl mt-5"
              style={{ color: "#F8F5EF" }}
            >
              {destination.name}
            </h1>

            <p
              className="mt-8 max-w-3xl text-xl leading-9"
              style={{ color: "#F8F5EF" }}
            >
              {destination.insight}
            </p>

          </div>
        </div>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section
        className="relative py-32 mt-50"
        style={{ background: "#4E1E27" }}
      >

        <div className="max-w-[1300px] mx-auto px-10 grid lg:grid-cols-2 gap-20">

          <div>

            <p
              className="uppercase tracking-[0.35em] text-xs"
              style={{ color: "#C9A46B" }}
            >
              ABOUT THE DESTINATION
            </p>

            <h2
              className="font-serif-display text-5xl mt-6"
              style={{ color: "#F8F5EF" }}
            >
              A Royal Wedding Experience
            </h2>

            <p
              className="mt-8 leading-9 text-lg"
              style={{ color: "#E8DAC8" }}
            >
              {destination.name} is one of the world's most sought-after wedding
              destinations, offering timeless architecture, luxurious
              hospitality, breathtaking scenery and unforgettable celebrations.

              Whether you dream of a royal palace wedding, an intimate lakeside
              ceremony, or a luxurious heritage celebration, our team creates
              experiences that feel effortless and unforgettable.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="border border-[#C9A46B]/20 p-8">
              <CalendarDays color="#C9A46B" />
              <h4 className="mt-6 text-lg text-[#F8F5EF]">
                Best Season
              </h4>
              <p className="mt-2 text-[#E8DAC8]">
                {destination.season}
              </p>
            </div>

            <div className="border border-[#C9A46B]/20 p-8">
              <Sparkles color="#C9A46B" />
              <h4 className="mt-6 text-lg text-[#F8F5EF]">
                Wedding Style
              </h4>
              <p className="mt-2 text-[#E8DAC8]">
                {destination.vibe}
              </p>
            </div>

            <div className="border border-[#C9A46B]/20 p-8">
              <Landmark color="#C9A46B" />
              <h4 className="mt-6 text-lg text-[#F8F5EF]">
                Venues
              </h4>
              <p className="mt-2 text-[#E8DAC8]">
                {destination.venue}
              </p>
            </div>

            <div className="border border-[#C9A46B]/20 p-8">
              <MapPin color="#C9A46B" />
              <h4 className="mt-6 text-lg text-[#F8F5EF]">
                Location
              </h4>
              <p className="mt-2 text-[#E8DAC8]">
                {destination.country}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= VENUES ================= */}

      <SignatureVenues venues={destination.venues} />

      <MobileSignatureVenues venues={destination.venues} />

      {/* ================= CTA ================= */}

      <section
        className="py-24 text-center"
        style={{
          background: "#4E1E27",
        }}
      >

        <h2
          className="font-serif-display text-5xl"
          style={{ color: "#F8F5EF" }}
        >
          Ready to Celebrate Here?
        </h2>

        <p
          className="mt-6 text-[#E8DAC8]"
        >
          Speak with our destination wedding experts today.
        </p>

        <button
    onClick={() =>
        window.open(
            "https://calendly.com/weddingsbykaarya/weddingsbykaarya-consultation-call",
            "_blank"
        )
    }
    className="px-14 py-5 uppercase tracking-[0.35em] transition-all duration-300 hover:scale-105"
    style={{
        border: "1px solid #C9A46B",
        color: "#C9A46B",
    }}
>
    Book a Free Consultation
</button>

      </section>

    </main>

    {/* ================= FOOTER ================= */}

    <Contact />

    <Footer />

  </div>
);
}