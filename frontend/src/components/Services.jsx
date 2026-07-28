import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { SERVICES } from "../lib/data";

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="relative py-28 md:py-44 px-6 md:px-10" style={{ backgroundColor: "#4E1E27" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>What We Compose</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif-display font-light text-4xl md:text-6xl leading-tight" style={{ color: "#F8F5EF" }}>
              Signature Services
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base font-light" style={{ color: "#E8DAC8" }}>
              An end-to-end atelier of everything a royal celebration requires — thoughtfully organised so nothing is left to chance.
            </p>
          </Reveal>
          <LotusDivider className="my-12" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              data-testid={`service-card-${i}`}
              className="group relative p-8 md:p-9 transition-colors duration-500"
              style={{ backgroundColor: "#5B2230", border: "1px solid rgba(201,164,107,0.22)" }}
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-serif-display text-sm" style={{ color: "#C9A46B" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 mx-4 opacity-40 group-hover:opacity-90 transition-opacity duration-500" style={{ backgroundColor: "#C9A46B" }} />
              </div>
              <h3 className="font-serif-display text-2xl md:text-3xl mb-5" style={{ color: "#F8F5EF" }}>{s.title}</h3>
              <ul className="space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm font-light" style={{ color: "#E8DAC8" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#C9A46B" }} />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
