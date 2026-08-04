import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  useRef,
  useLayoutEffect,
  useState,
} from "react";

import VenueModal from "./VenueModal";

export default function SignatureVenues({ venues = [] }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [moveDistance, setMoveDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
  const [selectedVenue, setSelectedVenue] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const calculate = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewport = window.innerWidth;

      // exact distance to travel
      const move = Math.max(0, totalWidth - viewport + 100);

      setMoveDistance(move);

      // vertical height required
      setSectionHeight(window.innerHeight + move);
    };

    calculate();

    window.addEventListener("resize", calculate);

    return () => window.removeEventListener("resize", calculate);
  }, [venues]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -moveDistance]
  );

  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block"
      style={{
        background: "#552230",
        height: sectionHeight,
      }}
    >
      <div
        className="sticky overflow-hidden"
        style={{
          top: "95px",
          height: "calc(100vh - 95px)",
        }}
      >
        <div className="flex flex-col h-full">

          {/* Heading */}

          <div className="pt-8 pb-8 text-center flex-shrink-0">

            <p
              className="uppercase tracking-[0.4em] text-xs"
              style={{
                color: "#C9A46B",
              }}
            >
              CURATED VENUES
            </p>

            <h2
              className="font-serif-display text-6xl mt-4"
              style={{
                color: "#F8F5EF",
              }}
            >
              Discover Extraordinary Venues
            </h2>

            <p
              className="max-w-3xl mx-auto mt-6 text-lg leading-8"
              style={{
                color: "#E8DAC8",
              }}
            >
              Every venue has been handpicked by Kaarya to create unforgettable destination weddings.
            </p>

          </div>

          {/* Cards */}

          <div className="flex-1 flex items-center overflow-hidden">

            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-16 pl-[10vw] pr-[20vw] w-max"
            >
              {venues.map((venue) => (
                <motion.div
                  key={venue.name}
                  className="w-[520px] shrink-0"
                  whileHover={{
                    y: -18,
                    rotateY: 5,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  onClick={() => setSelectedVenue(venue)}
                  style={{
                    cursor: "pointer",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="overflow-hidden rounded-[32px]"
                    style={{
                      border: "1px solid rgba(201,164,107,.18)",
                    }}
                  >
                    <motion.img
                      src={venue.image}
                      alt={venue.name}
                      loading="lazy"
                      className="w-full h-[430px] object-cover"
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                    />
                  </div>

                  <div className="mt-6 pb-6">

                    <p
                      className="uppercase tracking-[0.3em] text-xs"
                      style={{
                        color: "#C9A46B",
                      }}
                    >
                      {venue.type}
                    </p>

                    <h3
                      className="font-serif-display text-3xl mt-3"
                      style={{
                        color: "#F8F5EF",
                      }}
                    >
                      {venue.name}
                    </h3>

                    <p
                      className="mt-3 leading-7"
                      style={{
                        color: "#E8DAC8",
                      }}
                    >
                      {venue.description}
                    </p>

                    <div className="flex justify-between mt-6">

                      <span
                        style={{
                          color: "#C9A46B",
                        }}
                      >
                        📍 {venue.location}
                      </span>

                      <span
                        style={{
                          color: "#C9A46B",
                        }}
                      >
                        {venue.capacity}
                      </span>

                    </div>

                  </div>

                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Progress Bar */}

          <div className="pb-6 flex justify-center flex-shrink-0">

            <div
              className="w-80 h-[2px]"
              style={{
                background: "rgba(255,255,255,.15)",
              }}
            >
              <motion.div
                style={{
                  width: progress,
                  height: "100%",
                  background: "#C9A46B",
                }}
              />
            </div>

          </div>

        </div>
      </div>

      <VenueModal
        venue={selectedVenue}
        open={selectedVenue !== null}
        onClose={() => setSelectedVenue(null)}
      />
    </section>
  );
}