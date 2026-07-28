import { motion } from "framer-motion";

const GOLD = "#C9A46B";

// Ornate royal caparisoned elephant — brand centerpiece (line-art)
export const Elephant = ({ className = "", stroke = GOLD, animated = false }) => {
  const Wrap = animated ? motion.svg : "svg";
  const anim = animated
    ? {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 2.4, ease: "easeInOut" },
      }
    : {};
  return (
    <Wrap
      viewBox="0 0 200 170"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g {...(animated ? anim : {})}>
        {/* Body */}
        <path d="M46 118 C40 92 44 68 66 56 C82 47 108 45 128 54 C142 60 150 74 152 92 C153 104 152 114 150 122" />
        {/* Back haunch */}
        <path d="M150 122 C160 120 168 112 168 100 C168 92 164 86 158 84" />
        {/* Head & forehead dome */}
        <path d="M66 56 C58 46 58 34 68 28 C80 21 96 24 100 36" />
        {/* Ear (ornamental) */}
        <path d="M70 44 C56 42 46 52 48 66 C49 76 58 82 70 80 C74 79 76 74 74 68" />
        <path d="M64 52 C58 54 56 62 60 70" opacity="0.7" />
        {/* Trunk raised (auspicious) */}
        <path d="M66 66 C56 74 50 88 52 102 C53 112 46 120 38 120 C32 120 28 114 31 108 C34 103 40 104 41 110" />
        {/* Tusk */}
        <path d="M62 78 C58 86 60 94 68 98" />
        {/* Eye */}
        <circle cx="74" cy="52" r="1.8" fill={stroke} stroke="none" />
        {/* Legs */}
        <path d="M74 118 L72 150 M92 122 L92 152 M120 122 L122 152 M142 118 L146 150" />
        {/* Toenails */}
        <path d="M69 150 h7 M89 152 h7 M119 152 h7 M143 150 h7" opacity="0.8" />
        {/* Howdah (royal seat) */}
        <path d="M96 46 C100 40 128 40 132 46 L136 54 C120 50 108 50 92 54 Z" />
        <path d="M104 40 C104 34 124 34 124 40" />
        <path d="M114 34 L114 28 M110 30 L118 30" />
        {/* Decorative drape */}
        <path d="M92 66 C110 62 132 62 148 68 L146 84 C130 78 110 78 94 84 Z" opacity="0.9" />
        <path d="M96 84 l3 8 M108 86 l2 9 M120 86 l2 9 M132 85 l3 9 M143 82 l3 8" opacity="0.8" />
        {/* Anklets */}
        <path d="M71 138 h6 M120 138 h6" opacity="0.8" />
      </motion.g>
    </Wrap>
  );
};

// Rotating mandala ring
export const Mandala = ({ className = "", stroke = GOLD }) => {
  const petals = Array.from({ length: 24 });
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke={stroke} xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="96" strokeWidth="0.6" opacity="0.5" />
      <circle cx="100" cy="100" r="78" strokeWidth="0.6" opacity="0.4" />
      <circle cx="100" cy="100" r="52" strokeWidth="0.6" opacity="0.4" />
      {petals.map((_, i) => (
        <g key={i} transform={`rotate(${(360 / petals.length) * i} 100 100)`}>
          <path d="M100 22 C108 40 108 54 100 64 C92 54 92 40 100 22 Z" strokeWidth="0.7" opacity="0.55" />
          <line x1="100" y1="64" x2="100" y2="78" strokeWidth="0.5" opacity="0.4" />
        </g>
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${(360 / 12) * i} 100 100)`}>
          <path d="M100 100 L100 52" strokeWidth="0.4" opacity="0.3" />
        </g>
      ))}
    </svg>
  );
};

// Lotus divider
export const LotusDivider = ({ className = "", stroke = GOLD }) => (
  <div className={"flex items-center justify-center gap-4 " + className}>
    <span className="h-px w-16 md:w-28" style={{ background: `linear-gradient(90deg, transparent, ${stroke})` }} />
    <svg width="34" height="24" viewBox="0 0 40 28" fill="none" stroke={stroke} strokeWidth="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 26 C20 14 20 6 20 3 C24 8 26 16 24 24" />
      <path d="M20 26 C13 20 9 12 9 5 C15 8 19 15 20 24" />
      <path d="M20 26 C27 20 31 12 31 5 C25 8 21 15 20 24" />
      <path d="M20 26 C10 24 4 20 1 14 C9 13 16 17 20 24" />
      <path d="M20 26 C30 24 36 20 39 14 C31 13 24 17 20 24" />
    </svg>
    <span className="h-px w-16 md:w-28" style={{ background: `linear-gradient(90deg, ${stroke}, transparent)` }} />
  </div>
);

// Corner temple motif
export const CornerMotif = ({ className = "", stroke = GOLD }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" stroke={stroke} strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 40 C2 20 20 2 40 2" opacity="0.6" />
    <path d="M2 30 C2 14 14 2 30 2" opacity="0.4" />
    <path d="M10 10 q6 -6 14 -5 q-1 8 -7 12 q-6 4 -12 3 q-1 -7 5 -10 Z" opacity="0.7" />
    <circle cx="24" cy="24" r="2" fill={stroke} stroke="none" />
  </svg>
);

// Diya (oil lamp) with animated flame
export const Diya = ({ className = "", stroke = GOLD }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse className="diya-glow" cx="30" cy="20" rx="16" ry="18" fill={stroke} opacity="0.4" />
    <g className="flame">
      <path d="M30 12 C33 18 33 24 30 28 C27 24 27 18 30 12 Z" fill="#F5D48A" />
      <path d="M30 16 C31.5 19 31.5 23 30 26 C28.5 23 28.5 19 30 16 Z" fill="#FFF3D6" />
    </g>
    <path d="M14 34 C14 44 46 44 46 34 C42 40 18 40 14 34 Z" fill={stroke} />
    <path d="M14 34 C18 30 42 30 46 34" fill="none" stroke="#8a6a3f" strokeWidth="1" />
  </svg>
);
