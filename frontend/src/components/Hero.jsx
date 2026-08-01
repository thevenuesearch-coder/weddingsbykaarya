import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "../lib/data";
import { MaskedLines } from "./Reveal";
import { Mandala, Diya, Elephant } from "./Motifs";
import { scrollToId } from "../hooks/useLenis";

const Petals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        dur: 10 + Math.random() * 10,
        size: 8 + Math.random() * 10,
        rot: Math.random() * 360,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            animation: `petal-fall ${p.dur}s linear ${p.delay}s infinite`,
          }}
        >
          <svg width={p.size} height={p.size * 1.3} viewBox="0 0 20 26" style={{ transform: `rotate(${p.rot}deg)` }}>
            <path d="M10 0 C16 8 16 18 10 26 C4 18 4 8 10 0 Z" fill="#C9A46B" opacity="0.55" />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} data-testid="hero-section" data-cursor-shimmer className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax + slow zoom */}
      <motion.div className="absolute inset-0" style={{ y: yBg, scale: scaleBg }}>
        <img src={IMAGES.heroPalace} alt="Royal Indian wedding at a palace" className="h-full w-full object-cover" />
      </motion.div>

      {/* Maroon scrims (no gradient stacks that muddy — solid tints) */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(78,30,39,0.62)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(78,30,39,0.85), rgba(78,30,39,0.35) 45%, rgba(78,30,39,0.92))" }} />

      {/* Rotating mandala */}
      <Mandala className="absolute -right-28 -top-28 w-[420px] h-[420px] md:w-[620px] md:h-[620px] animate-spin-slow opacity-[0.18] z-10" />
      <Mandala className="absolute -left-40 bottom-[-10rem] w-[380px] h-[380px] animate-spin-slow-rev opacity-[0.12] z-10 hidden md:block" />

      <Petals />

      {/* Content */}
      <motion.div style={{ y: yContent, opacity }} className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[0.7rem] md:text-sm tracking-[0.4em] uppercase mb-6"
          style={{ color: "#C9A46B" }}
        >
          India&apos;s Finest Destination Wedding Company
        </motion.p>

        <h1 className="font-serif-display font-light leading-[0.95] text-5xl md:text-7xl lg:text-[5.5rem]" style={{ color: "#F8F5EF" }}>
          <MaskedLines
            lines={["Where Dreams Become", "Timeless Celebrations"]}
            delay={0.6}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.1 }}
          className="mt-8 max-w-2xl text-sm md:text-base leading-relaxed font-light"
          style={{ color: "#E8DAC8" }}
        >
          At Weddings by Kaarya, we transform your vision into an extraordinary celebration with bespoke
          planning, royal aesthetics, and flawless execution — crafted to reflect India&apos;s rich traditions
          while embracing modern luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="mt-7 flex items-center justify-center gap-4 text-xs md:text-sm tracking-[0.32em] uppercase font-serif-display"
          style={{ color: "#C9A46B" }}
        >
          <span>Dream</span>
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9A46B" }} />
          <span>Design</span>
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9A46B" }} />
          <span>Deliver</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            data-testid="hero-cta-primary"
            onClick={() => scrollToId("contact")}
            className="px-9 py-4 text-xs tracking-[0.22em] uppercase transition-all duration-500 hover:tracking-[0.3em]"
            style={{ backgroundColor: "#C9A46B", color: "#4E1E27" }}
          >
            Begin Your Wedding Journey
          </button>
          <button
            data-testid="hero-cta-secondary"
            onClick={() => scrollToId("destinations")}
            className="px-9 py-4 text-xs tracking-[0.22em] uppercase transition-all duration-500 hover:bg-[#C9A46B]/10"
            style={{ border: "1px solid #C9A46B", color: "#C9A46B" }}
          >
            Discover Our Destinations
          </button>
        </motion.div>
      </motion.div>

      {/* Diyas along the bottom */}
      <div className="absolute bottom-4 inset-x-0 z-30 flex items-end justify-center gap-8 md:gap-16 opacity-90">
        {[0, 1, 2, 3, 4].map((i) => (
          <Diya key={i} className="w-8 h-8 md:w-11 md:h-11" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 right-8 z-30 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase rotate-90 origin-center mb-6" style={{ color: "#E8DAC8" }}>Scroll</span>
        <motion.span animate={{ height: [10, 26, 10] }} transition={{ duration: 2, repeat: Infinity }} className="w-px" style={{ backgroundColor: "#C9A46B" }} />
      </motion.div>
    </section>
  );
}
