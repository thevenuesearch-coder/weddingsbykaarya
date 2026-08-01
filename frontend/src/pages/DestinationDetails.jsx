import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { MapPin, CalendarDays, Sparkles, Landmark } from "lucide-react";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
  <>
    {/* HERO */}

    <section className="relative h-[90vh] overflow-hidden">

      <img
        src={destination.img}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(20,10,10,.85), rgba(20,10,10,.2))",
        }}
      />

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

    {/* OVERVIEW */}

    <section
      className="py-24"
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
            destinations, offering timeless architecture, luxurious hospitality,
            breathtaking scenery and unforgettable celebrations.

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

    {/* STORY */}

    <section
      className="py-28"
      style={{
        background: "#552230",
      }}
    >

      <div className="max-w-5xl mx-auto px-10 text-center">

        <h2
          className="font-serif-display text-5xl"
          style={{ color: "#F8F5EF" }}
        >
          Your Story Begins Here
        </h2>

        <p
          className="mt-10 text-lg leading-10"
          style={{ color: "#E8DAC8" }}
        >
          Every destination has a soul. Every celebration deserves a setting
          that reflects your love story.

          From the first welcome dinner to the final farewell brunch, every
          experience is thoughtfully designed, flawlessly executed and crafted
          with timeless elegance.
        </p>

      </div>

    </section>

    {/* CTA */}

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
        className="mt-12 px-10 py-4 uppercase tracking-[0.3em]"
        style={{
          border: "1px solid #C9A46B",
          color: "#C9A46B",
        }}
      >
        Book a Free Consultation
      </button>

    </section>

    <Contact />

    <Footer />

  </>
);
}