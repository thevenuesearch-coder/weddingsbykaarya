import { Reveal } from "./Reveal";
import { useState } from "react";

const BRANDS = [
  {logo: "/brands/taj.png" },
  {logo: "/brands/marriott.png" },
  {logo: "/brands/itc.png" },
  {logo: "/brands/novotel.png" },
  {logo: "/brands/radisson.png" },
  {logo: "/brands/parkhyatt.png" },
  {logo: "/brands/westin.png" },
  {logo: "/brands/sheraton.png" },
];

export default function Collaborations() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "#4E1E27",
      }}
    >
      {/* Heading */}

      <div className="max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <p
            className="uppercase tracking-[0.45em] text-xs"
            style={{
              color: "#C9A46B",
            }}
          >
            Trusted by
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="mt-6 font-serif-display text-5xl md:text-7xl font-light"
            style={{
              color: "#F8F5EF",
            }}
          >
            Our Trusted Partners
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="mt-8 max-w-3xl mx-auto leading-8 text-base md:text-lg"
            style={{
              color: "#E8DAC8",
            }}
          >
            Exceptional weddings begin with exceptional partnerships.
            We proudly collaborate with India's finest luxury hotels,
            resorts and hospitality brands to create unforgettable
            destination weddings.
          </p>
        </Reveal>

      </div>

      {/* Fade Left */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "55%",
          transform: "translateY(-50%)",
          width: "180px",
          height: "180px",
          background:
            "linear-gradient(to right,#4E1E27 20%,rgba(78,30,39,0))",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Fade Right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "55%",
          transform: "translateY(-50%)",
          width: "180px",
          height: "180px",
          background:
            "linear-gradient(to left,#4E1E27 20%,rgba(78,30,39,0))",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Marquee */}

      <div
        className="mt-24 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div
          style={{
            display: "flex",
            width: "max-content",
            alignItems: "center",
            gap: "90px",
            animation: "collabScroll 35s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >

          {[...BRANDS, ...BRANDS].map((brand, index) => (

            <div
              key={index}
              className="flex items-center gap-5 flex-shrink-0 transition-all duration-300 hover:scale-110"
            >

              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  height: "62px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.9,
                }}
              />

              <span
                style={{
                  color: "#F8F5EF",
                  fontSize: "24px",
                  fontFamily: "Cormorant Garamond, serif",
                  letterSpacing: "0.05em",
                }}
              >
                {brand.name}
              </span>

            </div>

          ))}

        </div>

      </div>

      <style>{`

        @keyframes collabScroll{

          from{
            transform:translateX(0);
          }

          to{
            transform:translateX(-50%);
          }

        }

      `}</style>

    </section>
  );
}