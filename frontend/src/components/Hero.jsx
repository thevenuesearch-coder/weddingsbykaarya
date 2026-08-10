import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { scrollToId } from "../hooks/useLenis";

/*
|--------------------------------------------------------------------------
| TRUSTED PARTNERS
|--------------------------------------------------------------------------
| These files already exist inside:
|
| frontend/public/partners/
|
*/

const TRUSTED_BRANDS = [
  {
    src: "/partners/itc.png",
    alt: "ITC Hotels",
  },
  {
    src: "/partners/marriott.png",
    alt: "Marriott",
  },
  {
    src: "/partners/novotel.png",
    alt: "Novotel",
  },
  {
    src: "/partners/parkhyatt.png",
    alt: "Park Hyatt",
  },
  {
    src: "/partners/radisson.png",
    alt: "Radisson Hotels",
  },
  {
    src: "/partners/sheraton.png",
    alt: "Sheraton",
  },
  {
    src: "/partners/taj.png",
    alt: "Taj Hotels",
  },
  {
    src: "/partners/westin.png",
    alt: "Westin Hotels",
  },
];

/*
|--------------------------------------------------------------------------
| HERO COMPONENT
|--------------------------------------------------------------------------
*/

export default function Hero() {
  const heroRef = useRef(null);

  /*
  |--------------------------------------------------------------------------
  | Scroll animation
  |--------------------------------------------------------------------------
  */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.02, 1.12]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "10%"]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-12%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 1, 0]
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.62, 0.78]
  );

  /*
  |--------------------------------------------------------------------------
  | Begin wedding journey
  |--------------------------------------------------------------------------
  */

  const beginJourney = () => {
    scrollToId("contact");
  };

  /*
  |--------------------------------------------------------------------------
  | Destinations
  |--------------------------------------------------------------------------
  */

  const discoverDestinations = () => {
    scrollToId("destinations");
  };

  return (
    <>
      {/* ================================================================
          HERO
      ================================================================= */}

      <section
        ref={heroRef}
        id="hero"
        data-testid="hero-section"
        className="relative min-h-[100svh] w-full overflow-hidden"
        style={{
          backgroundColor: "#4E1E27",
        }}
      >
        {/* ============================================================
            BACKGROUND IMAGE
        ============================================================= */}

        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            scale: imageScale,
            y: imageY,
          }}
        >
          <img
            src="/hero-wedding.png"
            alt="Luxury Indian destination wedding at a palace"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: "center center",
            }}
          />
        </motion.div>

        {/* ============================================================
            BURGUNDY / MAROON OVERLAY

            This is intentionally placed ABOVE the image and BELOW
            all content.
        ============================================================= */}

        <motion.div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            opacity: overlayOpacity,
            background:
              "linear-gradient(180deg, rgba(54, 13, 25, 0.72) 0%, rgba(78, 30, 39, 0.60) 42%, rgba(47, 10, 21, 0.82) 100%)",
          }}
        />

        {/* ============================================================
            SECOND SUBTLE BURGUNDY FILTER
        ============================================================= */}

        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(48, 10, 22, 0.28) 0%, rgba(78, 30, 39, 0.08) 50%, rgba(48, 10, 22, 0.28) 100%)",
          }}
        />

        {/* ============================================================
            SOFT VIGNETTE
        ============================================================= */}

        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 25%, rgba(31, 7, 15, 0.30) 100%)",
          }}
        />

        {/* ============================================================
            GOLD DECORATIVE FRAME
        ============================================================= */}

        <div
          className="absolute inset-x-5 md:inset-x-10 top-5 md:top-8 bottom-5 md:bottom-8 z-[3] pointer-events-none"
          style={{
            border: "1px solid rgba(201,164,107,0.22)",
          }}
        />

        {/* ============================================================
            HERO CONTENT
        ============================================================= */}

        <motion.div
          className="relative z-[10] flex min-h-[100svh] flex-col items-center justify-center px-6 pt-24 pb-56 text-center md:px-10 md:pt-28 md:pb-60"
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
        >
          {/* Eyebrow */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
              letterSpacing: "0.35em",
            }}
            animate={{
              opacity: 1,
              y: 0,
              letterSpacing: "0.42em",
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 text-[10px] font-medium uppercase md:mb-9 md:text-xs"
            style={{
              color: "#D6B56C",
            }}
          >
            India's Finest Destination Wedding Company
          </motion.p>

          {/* Main heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[1500px] font-serif-display font-light leading-[0.9] tracking-[-0.045em]"
            style={{
              color: "#F8F5EF",
              textShadow: "0 4px 30px rgba(25, 5, 12, 0.35)",
              fontSize: "clamp(3.4rem, 8vw, 8.8rem)",
            }}
          >
            <span className="block">
              Where Dreams Become
            </span>

            <span className="block">
              Timeless Celebrations
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-3xl px-4 text-sm font-light leading-7 md:mt-10 md:text-base md:leading-8"
            style={{
              color: "rgba(248,245,239,0.92)",
              textShadow: "0 2px 18px rgba(20, 4, 10, 0.45)",
            }}
          >
            At Weddings by Kaarya, we transform your vision into an
            extraordinary celebration with bespoke planning, royal aesthetics,
            and flawless execution — crafted to reflect India's rich
            traditions while embracing modern luxury.
          </motion.p>

          {/* Dream Design Deliver */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.9,
            }}
            className="mt-8 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.5em] md:mt-10 md:text-xs"
            style={{
              color: "#D6B56C",
            }}
          >
            <span>Dream</span>

            <span
              className="h-1 w-1 rounded-full"
              style={{
                backgroundColor: "#D6B56C",
              }}
            />

            <span>Design</span>

            <span
              className="h-1 w-1 rounded-full"
              style={{
                backgroundColor: "#D6B56C",
              }}
            />

            <span>Deliver</span>
          </motion.div>

          {/* ============================================================
              CTA BUTTONS
          ============================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex w-full max-w-[850px] flex-col gap-4 sm:flex-row sm:justify-center md:mt-12"
          >
            {/* Begin Journey */}

            <button
              type="button"
              onClick={beginJourney}
              data-testid="hero-begin-journey"
              className="group flex h-16 flex-1 items-center justify-center gap-3 px-8 text-[10px] font-medium uppercase tracking-[0.28em] transition-all duration-500 md:text-xs"
              style={{
                backgroundColor: "#C9A46B",
                color: "#4E1E27",
                border: "1px solid #C9A46B",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#E0C58C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A46B";
              }}
            >
              <span>Begin Your Wedding Journey</span>

              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>

            {/* Discover Destinations */}

            <button
              type="button"
              onClick={discoverDestinations}
              data-testid="hero-discover-destinations"
              className="group flex h-16 flex-1 items-center justify-center gap-3 px-8 text-[10px] font-medium uppercase tracking-[0.28em] transition-all duration-500 md:text-xs"
              style={{
                backgroundColor: "rgba(48, 10, 22, 0.28)",
                color: "#E0C58C",
                border: "1px solid rgba(201,164,107,0.75)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(201,164,107,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(48, 10, 22, 0.28)";
              }}
            >
              <span>Discover Our Destinations</span>

              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </motion.div>

        {/* ============================================================
            TRUSTED BY
        ============================================================= */}

        <div
          className="absolute bottom-0 left-0 right-0 z-[20]"
          style={{
            background:
              "linear-gradient(180deg, rgba(43, 8, 18, 0) 0%, rgba(43, 8, 18, 0.30) 20%, rgba(43, 8, 18, 0.72) 100%)",
          }}
        >
          {/* Heading */}

          <div className="flex items-center justify-center gap-4 pb-5 pt-6 md:gap-6 md:pb-6 md:pt-8">
            <span
              className="h-px w-12 md:w-24"
              style={{
                backgroundColor: "rgba(201,164,107,0.5)",
              }}
            />

            <span
              className="text-[9px] font-medium uppercase tracking-[0.42em] md:text-[10px]"
              style={{
                color: "#D6B56C",
              }}
            >
              Trusted By
            </span>

            <span
              className="h-px w-12 md:w-24"
              style={{
                backgroundColor: "rgba(201,164,107,0.5)",
              }}
            />
          </div>

          {/* ========================================================
              INFINITE MARQUEE
          ========================================================= */}

          <div
            className="trusted-marquee-container relative w-full overflow-hidden pb-6 md:pb-8"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="trusted-marquee-track">
              {/* FIRST SET */}

              <div className="trusted-marquee-group">
                {TRUSTED_BRANDS.map((brand, index) => (
                  <div
                    key={`first-${brand.alt}-${index}`}
                    className="trusted-brand"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="trusted-logo"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>

              {/* SECOND IDENTICAL SET */}

              <div
                className="trusted-marquee-group"
                aria-hidden="true"
              >
                {TRUSTED_BRANDS.map((brand, index) => (
                  <div
                    key={`second-${brand.alt}-${index}`}
                    className="trusted-brand"
                  >
                    <img
                      src={brand.src}
                      alt=""
                      className="trusted-logo"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            SCROLL INDICATOR
        ============================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="absolute bottom-28 right-5 z-[25] hidden flex-col items-center gap-3 md:flex"
        >
          <span
            className="text-[9px] uppercase tracking-[0.45em]"
            style={{
              color: "#E0C58C",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={16}
              strokeWidth={1}
              style={{
                color: "#D6B56C",
              }}
            />
          </motion.div>
        </motion.div>

        {/* ============================================================
            DECORATIVE GOLD DOT
        ============================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          className="absolute left-8 top-1/2 z-[15] hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full md:flex"
          style={{
            border: "1px solid rgba(214,181,108,0.75)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: "#D6B56C",
            }}
          />
        </motion.div>
      </section>

      {/* ================================================================
          MARQUEE CSS
      ================================================================= */}

      <style>{`
        /* ============================================================
           TRUSTED BY — INFINITE MARQUEE
        ============================================================ */

        .trusted-marquee-container {
          width: 100%;
        }

        .trusted-marquee-track {
          display: flex;
          width: max-content;
          animation: kaaryaTrustedMarquee 32s linear infinite;
          will-change: transform;
        }

        .trusted-marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .trusted-brand {
          width: 190px;
          height: 58px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          margin-right: 45px;

          padding: 8px 20px;
        }

        .trusted-logo {
          display: block;

          width: auto;
          height: auto;

          max-width: 145px;
          max-height: 42px;

          object-fit: contain;

          opacity: 0.95;

          /*
           * Your partner images are used as monochrome/light
           * logos against the burgundy background.
           */
          filter:
            brightness(0)
            invert(1);

          transition:
            opacity 0.35s ease,
            transform 0.35s ease;
        }

        .trusted-brand:hover .trusted-logo {
          opacity: 1;
          transform: scale(1.08);
        }

        /*
         * Because the two groups have exactly the same content,
         * moving by 50% creates a seamless loop.
         */

        @keyframes kaaryaTrustedMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /*
         * Pause when user hovers over the partner area.
         */

        .trusted-marquee-container:hover
        .trusted-marquee-track {
          animation-play-state: paused;
        }

        /*
         * MOBILE
         */

        @media (max-width: 768px) {

          .trusted-marquee-track {
            animation-duration: 24s;
          }

          .trusted-brand {
            width: 145px;
            height: 52px;

            margin-right: 25px;

            padding: 6px 12px;
          }

          .trusted-logo {
            max-width: 110px;
            max-height: 34px;
          }
        }

        /*
         * SMALL MOBILE
         */

        @media (max-width: 420px) {

          .trusted-marquee-track {
            animation-duration: 20s;
          }

          .trusted-brand {
            width: 130px;
            margin-right: 20px;
          }

          .trusted-logo {
            max-width: 95px;
            max-height: 30px;
          }
        }

        /*
         * ACCESSIBILITY
         */

        @media (prefers-reduced-motion: reduce) {

          .trusted-marquee-track {
            animation-duration: 0.001ms;
            animation-iteration-count: 1;
          }
        }
      `}</style>
    </>
  );
}