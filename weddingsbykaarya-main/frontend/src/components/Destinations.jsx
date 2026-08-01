import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { MapPin, CalendarDays, Sparkles, Landmark, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import { DESTINATIONS } from "../lib/data";
import { scrollToId } from "../hooks/useLenis";
import { useNavigate } from "react-router-dom";

const NamesMarquee = () => {
  const line = (
    <span className="flex items-center shrink-0">
      {DESTINATIONS.map((d) => (
        <span key={d.name} className="flex items-center">
          <span className="font-serif-display text-4xl md:text-6xl px-6 md:px-10" style={{ color: "rgba(248,245,239,0.9)" }}>{d.name}</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A46B" }} />
        </span>
      ))}
    </span>
  );
  return (
    <div className="overflow-hidden py-6" style={{ borderTop: "1px solid rgba(201,164,107,0.18)", borderBottom: "1px solid rgba(201,164,107,0.18)" }}>
      <div className="flex whitespace-nowrap animate-marquee">{line}{line}</div>
    </div>
  );
};

function DestinationPanel({ d, index }) {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.25, 1.05]);
  const yNum = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  // 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const rY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);

    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  const left = index % 2 === 0;
  const chips = [
    { icon: CalendarDays, label: d.season },
    { icon: Sparkles, label: d.vibe },
    { icon: Landmark, label: d.venue },
  ];

  return (
    <div ref={ref} data-testid={`destination-${index}`} className="relative py-16 md:py-24">
      <div className={`mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${left ? "" : "lg:[direction:rtl]"}`}>
        {/* Image with 3D tilt + parallax */}
        <div
          className="lg:col-span-7 [direction:ltr]"
          style={{ perspective: 1200 }}
          data-cursor-label="Explore"
        >
        <Link
          to={`/destination/${d.slug}`}
          className="block cursor-pointer"
        >
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onLeave}
          onMouseMove={onMove}
          onClick={() => navigate(`/destination/${d.slug}`)}
          style={{
            rotateX: rX,
            rotateY: rY,
            transformStyle: "preserve-3d",
          }}
          className="relative overflow-hidden cursor-none"
        >
        <div
          className="relative overflow-hidden"
           style={{ border: "1px solid rgba(201,164,107,0.3)" }}
        >
        <motion.img
          style={{
            y: yImg,
            scale: scaleImg,
          }}
          src={d.img}
          alt={`${d.name}, ${d.country} — luxury destination wedding`}
          loading="lazy"
          className="w-full h-[420px] md:h-[560px] object-cover transition-transform duration-500 hover:scale-105"
        />

        <div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(to top, rgba(78,30,39,0.75), rgba(78,30,39,0.15) 45%, transparent 70%)",
  }}
/>

<motion.div
  animate={{
    opacity: hovered ? 1 : 0,
    scale: hovered ? 1 : 0.4,
    x: cursor.x - 45,
    y: cursor.y - 45,
  }}
  transition={{
    type: "spring",
    stiffness: 350,
    damping: 28,
  }}
  className="absolute z-30 w-[90px] h-[90px] rounded-full border border-[#C9A46B] bg-[#4E1E27]/70 backdrop-blur-md flex items-center justify-center pointer-events-none"
>
  <span
    className="text-[11px] uppercase tracking-[0.35em]"
    style={{ color: "#F8F5EF" }}
  >
    VIEW
  </span>
</motion.div>

        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute bottom-5 left-5 px-4 py-2"
          data-testid={`destination-tag-${index}`}
        >
          <span
            className="text-[0.7rem] tracking-[0.3em] uppercase"
            style={{ color: "#C9A46B" }}
          >
            {d.tag}
          </span>
        </div>
      </div>
    </motion.div>
  </Link>
</div>
        {/* Text */}
        <div className="lg:col-span-5 [direction:ltr] relative" data-cursor="dash">
          <motion.span style={{ y: yNum }} className="absolute -top-24 right-0 font-serif-display leading-none pointer-events-none select-none text-outline-gold text-[9rem] md:text-[13rem] opacity-40">
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <Reveal className="relative">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} color="#C9A46B" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#E8DAC8" }}>{d.country}</span>
            </div>
            <h3 className="font-serif-display font-light text-5xl md:text-7xl leading-none mb-5" style={{ color: "#F8F5EF" }}>{d.name}</h3>
            <p className="text-sm md:text-base leading-relaxed font-light mb-8 max-w-md" style={{ color: "#E8DAC8" }}>{d.insight}</p>
            <div className="space-y-3">
              {chips.map((c) => (
                <div key={c.label} className="flex items-center gap-3 py-2" style={{ borderBottom: "1px solid rgba(201,164,107,0.18)" }}>
                  <c.icon size={16} color="#C9A46B" strokeWidth={1.5} />
                  <span className="text-sm font-light" style={{ color: "#F8F5EF" }}>{c.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">

  <Link
    to={`/destination/${d.slug}`}
    className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-[0.22em] uppercase transition-all duration-500 hover:tracking-[0.3em]"
    style={{
      border: "1px solid #C9A46B",
      color: "#C9A46B",
    }}
  >
    View Destination
    <ArrowRight size={15} />
  </Link>

  <button
    onClick={() => {
      window.dispatchEvent(
        new CustomEvent("kaarya:enquire", {
          detail: {
            location: `${d.name}, ${d.country}`,
          },
        })
      );

      scrollToId("contact");
    }}
    className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-[0.22em] uppercase transition-all duration-500 hover:tracking-[0.3em]"
    style={{
      border: "1px solid #C9A46B",
      color: "#C9A46B",
    }}
  >
    Enquire
  </button>

</div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" data-testid="destinations-section" className="relative py-24 md:py-40" style={{ backgroundColor: "#4E1E27" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center mb-6">
        <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>Where We Celebrate</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-serif-display font-light text-4xl md:text-6xl leading-tight" style={{ color: "#F8F5EF" }}>Signature Destinations</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base font-light" style={{ color: "#E8DAC8" }}>
            From lake palaces in Rajasthan to overwater pavilions in the Maldives — Asia&apos;s most breathtaking settings, curated for the celebration of a lifetime.
          </p>
        </Reveal>
        <LotusDivider className="my-10" />
      </div>

      <NamesMarquee />

      <div className="mt-6">
        {DESTINATIONS.map((d, i) => (
          <DestinationPanel key={d.name} d={d} index={i} />
        ))}
      </div>
    </section>
  );
}
