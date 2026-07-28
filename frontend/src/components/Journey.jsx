import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { JOURNEY } from "../lib/data";

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" data-testid="journey-section" className="relative py-28 md:py-44 px-6 md:px-10" style={{ backgroundColor: "#4E1E27" }}>
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>From First Word to Forever</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif-display font-light text-4xl md:text-6xl" style={{ color: "#F8F5EF" }}>The Wedding Journey</h2>
          </Reveal>
          <LotusDivider className="my-12" />
        </div>

        <div ref={ref} className="relative">
          {/* Center gold line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: "rgba(201,164,107,0.22)" }} />
          <motion.div className="absolute left-6 md:left-1/2 top-0 w-px -translate-x-1/2 origin-top" style={{ backgroundColor: "#C9A46B", height: lineHeight }} />

          <div className="space-y-16 md:space-y-28">
            {JOURNEY.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <div key={j.phase} data-testid={`journey-step-${i}`} className={`relative flex items-center ${left ? "md:justify-start" : "md:justify-end"}`}>
                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-10"
                    style={{ backgroundColor: "#C9A46B", boxShadow: "0 0 0 6px rgba(78,30,39,1)" }}
                  />
                  <Reveal className={`pl-16 md:pl-0 md:w-[45%] ${left ? "md:text-right md:pr-14" : "md:pl-14"}`}>
                    <span className="font-serif-display text-6xl md:text-7xl block leading-none" style={{ color: "rgba(201,164,107,0.35)" }}>{j.phase}</span>
                    <span className="inline-block mt-2 text-xs tracking-[0.35em] uppercase" style={{ color: "#C9A46B" }}>{j.word}</span>
                    <h3 className="font-serif-display text-2xl md:text-4xl mt-3 mb-3" style={{ color: "#F8F5EF" }}>{j.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed font-light" style={{ color: "#E8DAC8" }}>{j.text}</p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
