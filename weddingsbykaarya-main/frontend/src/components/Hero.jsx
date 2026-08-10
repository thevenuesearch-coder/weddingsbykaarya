import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLines } from "./Reveal";
import { Mandala, Diya } from "./Motifs";
import { scrollToId } from "../hooks/useLenis";

/* =========================================================
   FLOATING PETALS
========================================================= */

const Petals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        dur: 10 + Math.random() * 10,
        size: 8 + Math.random() * 10,
        rot: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            animation: `petal-fall ${p.dur}s linear ${p.delay}s infinite`,
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 20 26"
            style={{
              transform: `rotate(${p.rot}deg)`,
            }}
          >
            <path
              d="M10 0 C16 8 16 18 10 26 C4 18 4 8 10 0 Z"
              fill="#C9A46B"
              opacity="0.55"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const ref = useRef(null);

  /* -------------------------------------------------------
     SCROLL PARALLAX
  ------------------------------------------------------- */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const scaleBg = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.18]
  );

  const yContent = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "35%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0]
  );

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      data-cursor-shimmer
      className="relative h-screen w-full overflow-hidden"
    >

      {/* =====================================================
          HERO BACKGROUND IMAGE
          
          IMPORTANT:
          The image is loaded directly from /public/hero-wedding.png
          No IMAGES object
          No background-color
          No gradient overlay
          No video
      ===================================================== */}

      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          y: yBg,
          scale: scaleBg,
        }}
      >
        <motion.img
          src="/hero-wedding.png"
          alt="Royal Indian wedding celebration"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{
            scale: 1.12,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 12,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>


      {/* =====================================================
          ROTATING MANDALAS
      ===================================================== */}

      <Mandala
        className="
          absolute
          -right-28
          -top-28
          w-[420px]
          h-[420px]
          md:w-[620px]
          md:h-[620px]
          animate-spin-slow
          opacity-[0.18]
          z-10
        "
      />

      <Mandala
        className="
          absolute
          -left-40
          bottom-[-10rem]
          w-[380px]
          h-[380px]
          animate-spin-slow-rev
          opacity-[0.12]
          z-10
          hidden
          md:block
        "
      />


      {/* =====================================================
          FALLING PETALS
      ===================================================== */}

      <Petals />


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y: yContent,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-30
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >

        {/* -------------------------------------------------
            LOGO
        ------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src="/logo.png"
            alt="Kaarya Logo"
            className="
              w-14
              h-14
              mx-auto
              mb-6
              object-contain
            "
          />
        </motion.div>


        {/* -------------------------------------------------
            SUBTITLE
        ------------------------------------------------- */}

        <motion.p
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="
            text-[0.7rem]
            md:text-sm
            tracking-[0.4em]
            uppercase
            mb-6
          "
          style={{
            color: "#C9A46B",
            textShadow: "0 2px 12px rgba(0,0,0,0.75)",
          }}
        >
          India's Finest Destination Wedding Company
        </motion.p>


        {/* -------------------------------------------------
            MAIN HEADING
        ------------------------------------------------- */}

        <h1
          className="
            font-serif-display
            font-light
            leading-[0.95]
            text-5xl
            md:text-7xl
            lg:text-[5.5rem]
          "
          style={{
            color: "#F8F5EF",
            textShadow: "0 4px 25px rgba(0,0,0,0.65)",
          }}
        >
          <MaskedLines
            lines={[
              "Where Dreams Become",
              "Timeless Celebrations",
            ]}
            delay={0.6}
          />
        </h1>


        {/* -------------------------------------------------
            DESCRIPTION
        ------------------------------------------------- */}

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.4,
            duration: 1.1,
          }}
          className="
            mt-8
            max-w-2xl
            text-sm
            md:text-base
            leading-relaxed
            font-light
          "
          style={{
            color: "#F8F5EF",
            textShadow: "0 2px 15px rgba(0,0,0,0.8)",
          }}
        >
          At Weddings by Kaarya, we transform your vision into
          an extraordinary celebration with bespoke planning,
          royal aesthetics, and flawless execution — crafted to
          reflect India's rich traditions while embracing modern
          luxury.
        </motion.p>


        {/* -------------------------------------------------
            DREAM DESIGN DELIVER
        ------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.7,
            duration: 1,
          }}
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-4
            text-xs
            md:text-sm
            tracking-[0.32em]
            uppercase
            font-serif-display
          "
          style={{
            color: "#C9A46B",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          <span>Dream</span>

          <span
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor: "#C9A46B",
            }}
          />

          <span>Design</span>

          <span
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor: "#C9A46B",
            }}
          />

          <span>Deliver</span>
        </motion.div>


        {/* -------------------------------------------------
            CTA BUTTONS
        ------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.9,
            duration: 1,
          }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            gap-4
          "
        >

          {/* PRIMARY CTA */}

          <button
            data-testid="hero-cta-primary"
            onClick={() => scrollToId("contact")}
            className="
              px-9
              py-4
              text-xs
              tracking-[0.22em]
              uppercase
              transition-all
              duration-500
              hover:tracking-[0.3em]
              hover:scale-[1.02]
            "
            style={{
              backgroundColor: "#C9A46B",
              color: "#4E1E27",
              boxShadow:
                "0 8px 30px rgba(0,0,0,0.25)",
            }}
          >
            Begin Your Wedding Journey
          </button>


          {/* SECONDARY CTA */}

          <button
            data-testid="hero-cta-secondary"
            onClick={() => scrollToId("destinations")}
            className="
              px-9
              py-4
              text-xs
              tracking-[0.22em]
              uppercase
              transition-all
              duration-500
              hover:tracking-[0.3em]
              hover:bg-white/10
              hover:scale-[1.02]
            "
            style={{
              border: "1px solid #C9A46B",
              color: "#F8F5EF",
              textShadow:
                "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Discover Our Destinations
          </button>

        </motion.div>

      </motion.div>


      {/* =====================================================
          DIYAS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-4
          inset-x-0
          z-30
          flex
          items-end
          justify-center
          gap-8
          md:gap-16
          opacity-90
        "
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <Diya
            key={i}
            className="
              w-8
              h-8
              md:w-11
              md:h-11
            "
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>


      {/* =====================================================
          SCROLL CUE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2.2,
          duration: 1,
        }}
        className="
          absolute
          bottom-6
          right-8
          z-30
          hidden
          md:flex
          flex-col
          items-center
          gap-2
        "
      >
        <span
          className="
            text-[0.6rem]
            tracking-[0.3em]
            uppercase
            rotate-90
            origin-center
            mb-6
          "
          style={{
            color: "#F8F5EF",
            textShadow:
              "0 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Scroll
        </span>

        <motion.span
          animate={{
            height: [10, 26, 10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-px"
          style={{
            backgroundColor: "#C9A46B",
          }}
        />
      </motion.div>

    </section>
  );
}