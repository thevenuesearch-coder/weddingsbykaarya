import { motion } from "framer-motion";

export default function MobileSignatureVenues({ venues = [] }) {
  if (!venues.length) return null;

  return (
    <section
      className="lg:hidden py-20 px-5"
      style={{ background: "#552230" }}
    >
      <div className="text-center mb-14">

        <p
          className="uppercase tracking-[0.35em] text-[11px]"
          style={{ color: "#C9A46B" }}
        >
          CURATED VENUES
        </p>

        <h2
          className="font-serif-display text-4xl mt-4"
          style={{ color: "#F8F5EF" }}
        >
          Discover Extraordinary Venues
        </h2>

        <p
          className="mt-6 text-sm leading-7"
          style={{ color: "#E8DAC8" }}
        >
          Every venue has been handpicked by Kaarya to create unforgettable celebrations.
        </p>

      </div>

      <div className="space-y-12">

        {venues.map((venue, index) => (

          <motion.div
            key={venue.name}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
          >

            <div
              className="overflow-hidden rounded-[28px]"
              style={{
                border: "1px solid rgba(201,164,107,.18)",
              }}
            >

              <motion.img
                src={venue.image}
                alt={venue.name}
                className="w-full h-[320px] object-cover"
                whileHover={{
                  scale: 1.05,
                }}
              />

            </div>

            <div className="mt-6">

              <p
                className="uppercase tracking-[0.3em] text-[10px]"
                style={{ color: "#C9A46B" }}
              >
                {venue.type}
              </p>

              <h3
                className="font-serif-display text-2xl mt-2"
                style={{ color: "#F8F5EF" }}
              >
                {venue.name}
              </h3>

              <p
                className="mt-3 leading-7 text-sm"
                style={{ color: "#E8DAC8" }}
              >
                {venue.description}
              </p>

              <div className="flex justify-between mt-5">

                <span
                  style={{ color: "#C9A46B" }}
                >
                  📍 {venue.location}
                </span>

                <span
                  style={{ color: "#C9A46B" }}
                >
                  {venue.capacity}
                </span>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}