import { motion } from "framer-motion";
import {
  Crown,
  Landmark,
  Handshake,
  Heart,
} from "lucide-react";

const PROMISES = [
  {
    icon: Crown,
    title: "Personal Wedding Curator",
    text: "A dedicated expert guiding your celebration from the first consultation until the final farewell."
  },
  {
    icon: Landmark,
    title: "Luxury Venue Collection",
    text: "Handpicked palaces, heritage hotels, beach resorts and private estates across India and beyond."
  },
  {
    icon: Handshake,
    title: "Trusted Partners",
    text: "Premium décor, photography, entertainment, hospitality and logistics under one roof."
  },
  {
    icon: Heart,
    title: "Stress-Free Experience",
    text: "While you celebrate every moment with your loved ones, Kaarya quietly manages every detail."
  }
];

export default function KaaryaPromise() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "#4E1E27",
      }}
    >
      <div className="max-w-[1450px] mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p
            className="uppercase tracking-[.45em] text-xs"
            style={{
              color: "#C9A46B",
            }}
          >
            THE KAARYA PROMISE
          </p>

          <h2
            className="font-serif-display text-6xl mt-6"
            style={{
              color: "#F8F5EF",
            }}
          >
            Luxury Without Compromise
          </h2>

          <p
            className="max-w-3xl mx-auto mt-8 text-lg leading-9"
            style={{
              color: "#E8DAC8",
            }}
          >
            Every celebration we curate reflects our passion for timeless elegance,
            flawless execution and unforgettable experiences.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-24">

          {PROMISES.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .8,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="rounded-[30px] p-10"
                style={{
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(201,164,107,.18)",
                  backdropFilter: "blur(16px)",
                }}
              >

                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(201,164,107,.08)",
                    border: "1px solid rgba(201,164,107,.25)",
                  }}
                >

                  <Icon
                    size={34}
                    color="#C9A46B"
                  />

                </div>

                <h3
                  className="font-serif-display text-3xl mt-8"
                  style={{
                    color: "#F8F5EF",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-6 leading-8"
                  style={{
                    color: "#E8DAC8",
                  }}
                >
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}