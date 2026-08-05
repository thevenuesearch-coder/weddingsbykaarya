import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Users } from "lucide-react";

export default function VenueModal({
  venue,
  open,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && venue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6 lg:p-10"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 40,
            }}
            transition={{
              duration: 0.45,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[1500px] h-[90vh] rounded-[34px] overflow-hidden"
            style={{
              background: "#552230",
            }}
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] h-full">

              {/* IMAGE */}

              <div className="relative h-full overflow-hidden">

                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover object-center"
                />

              </div>

              {/* CONTENT */}

              <div className="flex flex-col h-full p-14">

                {/* CLOSE */}

                <div className="flex justify-end">

                  <button
                    onClick={onClose}
                    className="rounded-full p-2 hover:bg-white/10 transition"
                  >
                    <X color="#C9A46B" size={28} />
                  </button>

                </div>

                {/* TOP CONTENT */}

                <div>

                  <p
                    className="uppercase tracking-[0.35em] text-xs"
                    style={{
                      color: "#C9A46B",
                    }}
                  >
                    {venue.type}
                  </p>

                  <h2
                    className="font-serif-display text-6xl mt-4 leading-tight"
                    style={{
                      color: "#F8F5EF",
                    }}
                  >
                    {venue.name}
                  </h2>

                  <p
                    className="mt-8 text-lg leading-9"
                    style={{
                      color: "#E8DAC8",
                    }}
                  >
                    {venue.description}
                  </p>

                  <div className="space-y-6 mt-12">

                    <div className="flex items-center gap-4">

                      <MapPin
                        size={24}
                        color="#C9A46B"
                      />

                      <span
                        className="text-lg"
                        style={{
                          color: "#E8DAC8",
                        }}
                      >
                        {venue.location}
                      </span>

                    </div>

                    <div className="flex items-center gap-4">

                      <Users
                        size={24}
                        color="#C9A46B"
                      />

                      <span
                        className="text-lg"
                        style={{
                          color: "#E8DAC8",
                        }}
                      >
                        {venue.capacity}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Push Button to Bottom */}

                <div className="flex-1" />

                {/* BUTTON */}

                <button
                  className="w-full py-5 uppercase tracking-[0.35em] text-sm transition-all duration-500 hover:bg-[#C9A46B] hover:text-[#4E1E27]"
                  style={{
                    border: "1px solid #C9A46B",
                    color: "#C9A46B",
                  }}
                >
                  Book This Venue
                </button>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}