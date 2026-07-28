import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { TESTIMONIALS } from "../lib/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((p) => (p + 1) % TESTIMONIALS.length), []);
  const prev = () => setIdx((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const t = TESTIMONIALS[idx];

  return (
    <section data-testid="testimonials-section" className="relative py-28 md:py-44 px-6 md:px-10" style={{ backgroundColor: "#4E1E27" }}>
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>Words From Our Families</p></Reveal>
        <LotusDivider className="my-10" />

        <Quote size={44} strokeWidth={1} color="#C9A46B" className="mx-auto mb-8 opacity-70" />

        <div className="relative min-h-[220px] md:min-h-[200px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`testimonial-${idx}`}
              className="w-full"
            >
              <p className="font-serif-display italic font-light text-2xl md:text-4xl leading-snug" style={{ color: "#F8F5EF" }}>
                “{t.quote}”
              </p>
              <p className="mt-8 text-sm tracking-[0.2em] uppercase" style={{ color: "#C9A46B" }}>{t.name}</p>
              <p className="mt-1 text-xs tracking-[0.15em]" style={{ color: "#E8DAC8" }}>{t.place}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button data-testid="testimonial-prev" onClick={prev} className="p-3 transition-colors duration-300 hover:bg-[#C9A46B]/10" style={{ border: "1px solid rgba(201,164,107,0.4)" }}>
            <ChevronLeft size={20} color="#C9A46B" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} data-testid={`testimonial-dot-${i}`} onClick={() => setIdx(i)} className="h-1.5 transition-all duration-500" style={{ width: i === idx ? 28 : 8, backgroundColor: i === idx ? "#C9A46B" : "rgba(201,164,107,0.35)" }} />
            ))}
          </div>
          <button data-testid="testimonial-next" onClick={next} className="p-3 transition-colors duration-300 hover:bg-[#C9A46B]/10" style={{ border: "1px solid rgba(201,164,107,0.4)" }}>
            <ChevronRight size={20} color="#C9A46B" />
          </button>
        </div>
      </div>
    </section>
  );
}
