import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "../lib/data";
import { scrollToId } from "../hooks/useLenis";
import { Elephant } from "./Motifs";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(78,30,39,0.96)" : "rgba(78,30,39,0.35)",
        borderBottom: scrolled ? "1px solid rgba(201,164,107,0.25)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-20">
        <button data-testid="logo-home" onClick={() => go("hero")} className="flex items-center gap-3 group">
          <Elephant className="w-9 h-8 transition-transform duration-500 group-hover:-translate-y-0.5" />
          <span className="flex flex-col leading-none text-left">
            <span className="font-serif-display text-xl md:text-2xl" style={{ color: "#F8F5EF" }}>Kaarya</span>
            <span className="text-[0.55rem] tracking-[0.3em] uppercase" style={{ color: "#C9A46B" }}>Dream · Design · Deliver</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => go(n.id)}
              className="relative text-sm tracking-[0.15em] uppercase transition-colors duration-300 group"
              style={{ color: "#E8DAC8" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: "#C9A46B" }} />
            </button>
          ))}
        </nav>

        <button
          data-testid="header-cta"
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:tracking-[0.28em]"
          style={{ border: "1px solid #C9A46B", color: "#C9A46B" }}
        >
          Enquire
        </button>

        <button data-testid="mobile-menu-toggle" className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "#F8F5EF" }}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden overflow-hidden"
          style={{ backgroundColor: "rgba(78,30,39,0.98)", borderTop: "1px solid rgba(201,164,107,0.2)" }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <button key={n.id} data-testid={`mobile-nav-${n.id}`} onClick={() => go(n.id)} className="text-left text-lg font-serif-display" style={{ color: "#F8F5EF" }}>
                {n.label}
              </button>
            ))}
            <button data-testid="mobile-header-cta" onClick={() => go("contact")} className="mt-2 px-6 py-3 text-xs tracking-[0.2em] uppercase self-start" style={{ border: "1px solid #C9A46B", color: "#C9A46B" }}>
              Enquire
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
