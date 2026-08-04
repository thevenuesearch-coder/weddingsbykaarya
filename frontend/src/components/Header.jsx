import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import { NAV } from "../lib/data";
import { scrollToId } from "../hooks/useLenis";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
  setScrolled(window.scrollY > 180);
};

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isHome && location.state?.scrollTo) {
      setTimeout(() => {
        scrollToId(location.state.scrollTo);
      }, 250);

      window.history.replaceState({}, document.title);
    }
  }, [location, isHome]);

  const go = (id) => {
    setOpen(false);

    if (isHome) {
      setTimeout(() => scrollToId(id), 60);
    } else {
      navigate("/", {
        state: {
          scrollTo: id,
        },
      });
    }
  };

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
  duration: 1.8,
  ease: [0.22, 1, 0.36, 1],
}}
      className="fixed left-0 right-0 top-5 z-50 flex justify-center px-6"
>
  <motion.div

 animate={{
  width: "92%",
  maxWidth: "1380px",
  y: 8,
  borderRadius: 999,
  height: window.innerWidth < 768 ? 56 : 64,
}}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative flex items-center justify-between px-4 md:px-8 overflow-hidden"
  style={{
  position: "relative",

  background: `
linear-gradient(
135deg,
rgba(255,255,255,.16),
rgba(255,255,255,.05)
)
`,

  backdropFilter: "blur(38px) saturate(180%)",

  WebkitBackdropFilter: "blur(38px) saturate(180%)",

  border: "1px solid rgba(255,255,255,.15)",

  boxShadow: `
inset 0 1px rgba(255,255,255,.18),
0 18px 60px rgba(0,0,0,.22)
`,

  overflow: "hidden",
}}
>
  <div
  className="absolute inset-0 rounded-full pointer-events-none"
  style={{
    background:
      "linear-gradient(to bottom, rgba(255,255,255,.18), rgba(255,255,255,0))",
    opacity: .8,
  }}
/>
<motion.div
    animate={{
      x: ["-120%", "120%"],
    }}
    transition={{
      repeat: Infinity,
      duration: 7,
      ease: "linear",
    }}
    className="absolute top-0 bottom-0 w-40 pointer-events-none"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent)",
      filter: "blur(14px)",
      transform: "skewX(-20deg)",
    }}
  />
        {/* Logo */}
        <button
          data-testid="logo-home"
          onClick={() => go("hero")}
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.png"
            alt="Kaarya Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-500 group-hover:scale-110"
          />

          <img
  src="/kaarya1.png"   // Change to logo.png if that's the one you prefer
  alt="Kaarya"
  className="h-14 md:h-23 lg:h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
/>
        </button>

        {/* Desktop Navigation */}
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

              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: "#C9A46B" }}
              />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        {isHome ? (
          <button
            data-testid="header-cta"
            onClick={() => go("contact")}
            className="hidden md:inline-flex items-center px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:tracking-[0.28em]"
            style={{
              border: "1px solid #C9A46B",
              color: "#C9A46B",
            }}
          >
            Plan Your Wedding
          </button>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="hidden md:inline-flex items-center px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:tracking-[0.28em]"
            style={{
              border: "1px solid #C9A46B",
              color: "#C9A46B",
            }}
          >
            Home
          </button>
        )}

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: "#F8F5EF" }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </motion.div>

      {open && (
  <motion.div
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.35 }}
    className="absolute top-[64px] left-3 right-3 md:hidden rounded-3xl overflow-hidden"
   style={{
  background: `
    linear-gradient(
      135deg,
      rgba(255,255,255,.12),
      rgba(255,255,255,.05)
    )
  `,

  backdropFilter: "blur(38px) saturate(190%)",
  WebkitBackdropFilter: "blur(38px) saturate(190%)",

  border: "1px solid rgba(255,255,255,.18)",

  boxShadow: `
      inset 0 1px rgba(255,255,255,.18),
      0 18px 60px rgba(0,0,0,.28)
  `,
}}
  >
          <div className="px-8 py-8 flex flex-col gap-7">

            {NAV.map((n) => (
              <button
                key={n.id}
                data-testid={`mobile-nav-${n.id}`}
                onClick={() => go(n.id)}
                className="text-left text-base font-serif-display"
                style={{ color: "#F8F5EF" }}
              >
                {n.label}
              </button>
            ))}

            {isHome ? (
              <button
                onClick={() => go("contact")}
                className="mt-4 w-full py-3 text-xs tracking-[0.2em] uppercase self-start"
                style={{
                  border: "1px solid #C9A46B",
                  color: "#C9A46B",
                }}
              >
                Enquire
              </button>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="mt-4 w-full py-3 text-xs tracking-[0.2em] uppercase self-start"
                style={{
                  border: "1px solid #C9A46B",
                  color: "#C9A46B",
                }}
              >
                Home
              </button>
            )}

          </div>
        </motion.div>
      )}
    </motion.header>
  );
}