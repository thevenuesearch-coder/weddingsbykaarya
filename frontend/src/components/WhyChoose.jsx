import { motion } from "framer-motion";
import { Heart, Users, Landmark, Plane, Sparkles, ClipboardCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { WHY } from "../lib/data";

const ICONS = [Heart, Users, Landmark, Plane, Sparkles, ClipboardCheck];

export default function WhyChoose() {
  return (
    <section data-testid="why-section" className="relative py-28 md:py-44 px-6 md:px-10" style={{ backgroundColor: "#5B2230" }}>
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>The Kaarya Difference</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif-display font-light text-4xl md:text-6xl" style={{ color: "#F8F5EF" }}>Why Choose Kaarya</h2>
          </Reveal>
          <LotusDivider className="my-12" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {WHY.map((w, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`why-item-${i}`}
                className="group text-center px-4 py-8"
              >
                <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full transition-colors duration-500 group-hover:bg-[#C9A46B]/10" style={{ border: "1px solid rgba(201,164,107,0.4)" }}>
                  <Icon size={26} strokeWidth={1.3} color="#C9A46B" />
                </div>
                <h3 className="font-serif-display text-2xl mb-3" style={{ color: "#F8F5EF" }}>{w.title}</h3>
                <p className="text-sm leading-relaxed font-light max-w-xs mx-auto" style={{ color: "#E8DAC8" }}>{w.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
