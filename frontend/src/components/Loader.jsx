import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Elephant, Mandala } from "./Motifs";

export default function Loader({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      setTimeout(() => onDone && onDone(), 900);
    }, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#4E1E27" }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="relative flex items-center justify-center">
            <Mandala className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] animate-spin-slow opacity-40" />
            <img
  src="/logo.png"
  alt="Kaarya Logo"
  className="w-14 h-14 mx-auto mb-6 object-contain"
/>
          </div>
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <div className="font-serif-display text-3xl md:text-4xl tracking-wide" style={{ color: "#F8F5EF" }}>
              Weddings by Kaarya
            </div>
            <div className="mt-3 text-[0.7rem] md:text-xs tracking-[0.42em] uppercase" style={{ color: "#C9A46B" }}>
              Dream. Design. Deliver.
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-16 h-px"
            style={{ backgroundColor: "#C9A46B" }}
            initial={{ width: 0, opacity: 0.6 }}
            animate={{ width: 180, opacity: 1 }}
            transition={{ delay: 0.4, duration: 2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
