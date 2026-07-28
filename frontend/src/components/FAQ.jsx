import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { FAQS } from "../lib/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="relative py-28 md:py-40 px-6 md:px-10" style={{ backgroundColor: "#4E1E27" }}>
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>Questions we get every week</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif-display font-light text-4xl md:text-6xl" style={{ color: "#F8F5EF" }}>Before you enquire.</h2>
          </Reveal>
          <LotusDivider className="my-12" />
        </div>

        <div className="divide-y" style={{ borderColor: "rgba(201,164,107,0.18)" }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} data-testid={`faq-item-${i}`} style={{ borderTop: i === 0 ? "1px solid rgba(201,164,107,0.18)" : undefined, borderBottom: "1px solid rgba(201,164,107,0.18)" }}>
                <button
                  data-testid={`faq-toggle-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-serif-display text-xl md:text-2xl transition-colors duration-300 group-hover:text-[#C9A46B]" style={{ color: "#F8F5EF" }}>{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4 }} className="shrink-0 mt-1">
                    <Plus size={22} color="#C9A46B" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-10 text-sm md:text-base leading-relaxed font-light" style={{ color: "#E8DAC8" }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
