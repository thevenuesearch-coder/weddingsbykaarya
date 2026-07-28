import { motion } from "framer-motion";
import { Instagram as IgIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { INSTAGRAM, CONTACT } from "../lib/data";

export default function InstagramFeed() {
  return (
    <section data-testid="instagram-section" className="relative py-28 md:py-40 px-6 md:px-10" style={{ backgroundColor: "#5B2230" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>Follow us on</p></Reveal>
          <Reveal delay={0.1}>
            <a data-testid="instagram-handle" href={CONTACT.instagramLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-3 font-serif-display font-light text-4xl md:text-5xl transition-colors duration-300 hover:text-[#C9A46B]" style={{ color: "#F8F5EF" }}>
              <IgIcon size={30} strokeWidth={1.4} color="#C9A46B" /> {CONTACT.instagram}
            </a>
          </Reveal>
          <LotusDivider className="my-12" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {INSTAGRAM.map((src, i) => (
            <motion.a
              key={i}
              href={CONTACT.instagramLink}
              target="_blank"
              rel="noreferrer"
              data-testid={`instagram-item-${i}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.06 }}
              className="group relative aspect-square overflow-hidden"
              style={{ border: "1px solid rgba(201,164,107,0.2)" }}
            >
              <img src={src} alt="Instagram post" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "rgba(78,30,39,0.55)" }}>
                <IgIcon size={26} color="#F8F5EF" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
