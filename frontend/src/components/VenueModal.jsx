import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 lg:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: 0.4,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-[28px] overflow-hidden shadow-2xl max-h-[88vh]"
            style={{
              background: "#552230",
            }}
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] h-full">

              {/* Image Section */}

              <div className="relative bg-black">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full min-h-[520px] max-h-[88vh] object-cover"
                />
              </div>

              {/* Content */}

              <div className="relative overflow-y-auto p-8 lg:p-12">

                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 transition hover:rotate-90"
                >
                  <X size={28} color="#C9A46B" />
                </button>

                <p
                  className="uppercase tracking-[0.35em] text-xs"
                  style={{
                    color: "#C9A46B",
                  }}
                >
                  {venue.type}
                </p>

                <h2
                  className="font-serif-display text-4xl lg:text-5xl mt-4 leading-tight"
                  style={{
                    color: "#F8F5EF",
                  }}
                >
                  {venue.name}
                </h2>

                <p
                  className="mt-6 leading-8 text-lg"
                  style={{
                    color: "#E8DAC8",
                  }}
                >
                  {venue.description}
                </p>

                <div className="space-y-6 mt-10">

                  <div className="flex items-center gap-4">

                    <MapPin
                      size={22}
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
                      size={22}
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

                <button
    onClick={() => {
        onClose();

        setTimeout(() => {
            const section = document.getElementById("contact");

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 300);
    }}
    className="mt-14 px-10 py-4 uppercase tracking-[.3em] transition-all duration-300 hover:scale-105"
    style={{
        border: "1px solid #C9A46B",
        color: "#C9A46B",
    }}
>
    Drop Your Enquiry
</button>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}