import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";
import { useNavigate } from "react-router-dom";
import { LotusDivider, CornerMotif } from "./Motifs";
import { IMAGES } from "../lib/data";

const CHAPTERS = [
  {
    n: "I",
    word: "Dream",
    text:
      "It begins with your story. We sit with you, listen deeply, and understand the celebration you have carried in your heart — the heritage, the emotions, the people who matter most.",
  },
  {
    n: "II",
    word: "Design",
    text:
      "Then we compose. Every palette, motif and ritual is crafted with cultural authenticity and editorial elegance — a bespoke world designed around your family and your traditions.",
  },
  {
    n: "III",
    word: "Deliver",
    text:
      "Finally, we execute with quiet precision. From the first baraat to the last farewell, our team orchestrates every moment so your only task is to be beautifully present.",
  },
];

export default function About() {
  const ref = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-44 px-6 md:px-10"
      style={{ backgroundColor: "#4E1E27" }}
    >
      <CornerMotif className="absolute top-8 left-8 w-16 h-16 opacity-40 hidden md:block" />
      <CornerMotif className="absolute top-8 right-8 w-16 h-16 opacity-40 scale-x-[-1] hidden md:block" />

      <div className="mx-auto max-w-[1400px]">
        <Reveal className="text-center mb-4">
          <p
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: "#C9A46B" }}
          >
            The Kaarya Philosophy
          </p>
        </Reveal>

        <Reveal delay={0.1} className="text-center">
          <h2
            className="font-serif-display font-light text-4xl md:text-6xl leading-tight"
            style={{ color: "#F8F5EF" }}
          >
            A house built on a single promise
          </h2>
        </Reveal>

        <LotusDivider className="my-10" />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ================= Image ================= */}

          <Reveal className="relative">

            <motion.div
              whileHover={{
                scale: 1.02,
                y: -6,
              }}
              transition={{
                duration: 0.45,
              }}
              onClick={() => navigate("/wedding-journey")}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                border: "1px solid rgba(201,164,107,0.3)",
              }}
            >

              <motion.img
                style={{ y }}
                src={IMAGES.brideJewelry}
                alt="Bridal craftsmanship"
                className="w-full h-[420px] md:h-[600px] object-cover scale-110 transition-all duration-700 group-hover:scale-[1.15]"
              />

              {/* Dark Overlay */}

              <div
                className="absolute inset-0 transition-all duration-500 group-hover:bg-black/20"
              />

              {/* Click Hint */}

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="px-8 py-4 rounded-full backdrop-blur-xl"
                  style={{
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(255,255,255,.2)",
                  }}
                >
                  <p
                    className="uppercase tracking-[0.35em] text-xs"
                    style={{
                      color: "#F8F5EF",
                    }}
                  >
                    Explore Journey →
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* Experience Card */}

            <div
              className="absolute -bottom-6 -right-6 hidden md:block px-8 py-6"
              style={{
                backgroundColor: "#5B2230",
                border: "1px solid rgba(201,164,107,.35)",
              }}
            >
              <p
                className="font-serif-display text-4xl"
                style={{ color: "#C9A46B" }}
              >
                12+
              </p>

              <p
                className="text-xs tracking-[0.2em] uppercase mt-1"
                style={{ color: "#E8DAC8" }}
              >
                Years of Artistry
              </p>
            </div>

          </Reveal>

          {/* ================= Right Content ================= */}

          <div className="space-y-12">

            <Reveal>

              <p
                className="text-base md:text-lg leading-relaxed font-light"
                style={{ color: "#E8DAC8" }}
              >
                Weddings by Kaarya is an atelier for those who believe a wedding
                is not an event, but a legacy. Guided by the elephant — our
                emblem of royalty, prosperity and heritage — we craft
                celebrations that honour India's traditions while embracing a
                refined, modern luxury.
              </p>

            </Reveal>

            {CHAPTERS.map((c, i) => (

              <Reveal
                key={c.n}
                delay={i * 0.1}
                className="flex gap-6 md:gap-8"
              >

                <span
                  className="font-serif-display text-5xl md:text-6xl leading-none shrink-0"
                  style={{
                    color: "rgba(201,164,107,.55)",
                  }}
                >
                  {c.n}
                </span>

                <div className="pt-1">

                  <h3
                    className="font-serif-display text-2xl md:text-3xl mb-2"
                    style={{
                      color: "#F8F5EF",
                    }}
                  >
                    {c.word}
                  </h3>

                  <p
                    className="text-sm md:text-base leading-relaxed font-light"
                    style={{
                      color: "#E8DAC8",
                    }}
                  >
                    {c.text}
                  </p>

                </div>

              </Reveal>

            ))}

            {/* CTA Button */}

            <Reveal delay={0.4}>

              <button
                onClick={() => navigate("/wedding-journey")}
                className="mt-4 px-10 py-4 uppercase tracking-[0.3em] transition-all duration-500 hover:tracking-[0.38em]"
                style={{
                  border: "1px solid #C9A46B",
                  color: "#C9A46B",
                }}
              >
                Explore Our Journey
              </button>

            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}