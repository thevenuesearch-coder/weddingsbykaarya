import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { GALLERY } from "../lib/data";

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="relative py-28 md:py-44 px-6 md:px-10" style={{ backgroundColor: "#5B2230" }}>
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center">
          <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>Moments, Immortalised</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif-display font-light text-4xl md:text-6xl" style={{ color: "#F8F5EF" }}>The Wedding Gallery</h2>
          </Reveal>
          <LotusDivider className="my-12" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{  duration: 0.55,  ease: [0.22, 1, 0.36, 1],}}
              data-testid={`gallery-item-${i}`}
              data-cursor-label="View"
              className="group relative mb-5 md:mb-6 overflow-hidden break-inside-avoid"
              style={{ border: "1px solid rgba(201,164,107,0.2)" }}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 ${g.tall ? "h-[520px]" : "h-[360px]"}`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" style={{ background: "linear-gradient(to top, rgba(78,30,39,0.9), transparent)" }}>
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#E8DAC8" }}>{g.alt}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-end">
       <button
       onClick={() => {
        if (window.location.pathname === "/") {
          const contact = document.getElementById("contact");
          if (contact) {
            contact.scrollIntoView({
              behavior: "smooth",
            });
          }
          } else {
            window.location.href = "/#contact";
          }
        }}
        className="px-10 py-4 uppercase tracking-[0.32em] text-xs transition-all duration-500 hover:tracking-[0.4em]"
        style={{
        border: "1px solid #C9A46B",
        color: "#C9A46B",
      }}
    >
    Book a Free Call
    </button>
    </div>
    </section>
  );
}
