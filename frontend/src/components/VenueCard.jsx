import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";

export default function VenueCard({
  venue,
  onClick,
}) {
  return (
    <motion.div
      className="w-[360px] shrink-0 cursor-pointer"
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.35,
      }}
      onClick={onClick}
    >
      {/* Image */}

      <div
        className="
        overflow-hidden
        rounded-[28px]
        border
        "
        style={{
          borderColor: "rgba(201,164,107,.18)",
        }}
      >
        <motion.img
          src={venue.image}
          alt={venue.name}
          loading="lazy"
          className="
          w-full
          h-[220px]
          object-cover
          object-center
          "
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: .8,
          }}
        />
      </div>

      {/* Content */}

      <div className="pt-5">

        <p
          className="
          uppercase
          tracking-[0.32em]
          text-[11px]
          "
          style={{
            color:"#C9A46B",
          }}
        >
          {venue.type}
        </p>

        <h3
          className="
          font-serif-display
          text-[34px]
          mt-3
          leading-tight
          "
          style={{
            color:"#F8F5EF",
          }}
        >
          {venue.name}
        </h3>

        <p
          className="
          mt-4
          leading-7
          text-[15px]
          "
          style={{
            color:"#E8DAC8",
          }}
        >
          {venue.description}
        </p>

        <div className="flex justify-between mt-6">

          <div className="flex items-center gap-2">

            <MapPin
              size={17}
              color="#C9A46B"
            />

            <span
              style={{
                color:"#C9A46B",
              }}
            >
              {venue.location}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Users
              size={17}
              color="#C9A46B"
            />

            <span
              style={{
                color:"#C9A46B",
              }}
            >
              {venue.capacity}
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}