import { motion } from "framer-motion";

// Laurel leaves placed along an arc on each side of the badge
const LEAF_ANGLES = [120, 138, 156, 174, 192, 210, 228];
const leaves = (side: "left" | "right") =>
  LEAF_ANGLES.map((deg) => {
    const angle = side === "left" ? deg : 180 - deg;
    const rad = (angle * Math.PI) / 180;
    const x = 50 + 41 * Math.cos(rad);
    const y = 50 + 41 * Math.sin(rad);
    const tilt = side === "left" ? angle + 65 : angle - 65;
    return { x, y, tilt };
  });

const MonogramBadge = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14 md:w-16 md:h-16 drop-shadow-md" aria-hidden="true">
    <defs>
      <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(38 50% 55%)" />
        <stop offset="50%" stopColor="hsl(38 70% 74%)" />
        <stop offset="100%" stopColor="hsl(38 50% 52%)" />
      </linearGradient>
      <radialGradient id="logo-blush" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="hsl(345 70% 94%)" />
      </radialGradient>
    </defs>

    {/* Rings */}
    <circle cx="50" cy="50" r="34" fill="url(#logo-blush)" stroke="url(#logo-gold)" strokeWidth="1.6" />
    <circle cx="50" cy="50" r="29.5" fill="none" stroke="url(#logo-gold)" strokeWidth="0.6" strokeDasharray="1.2 2" />

    {/* Laurel branches */}
    {(["left", "right"] as const).map((side) =>
      leaves(side).map((leaf, i) => (
        <ellipse
          key={`${side}-${i}`}
          cx={leaf.x}
          cy={leaf.y}
          rx="2.2"
          ry="5"
          fill="url(#logo-gold)"
          opacity={0.55 + i * 0.06}
          transform={`rotate(${leaf.tilt} ${leaf.x} ${leaf.y})`}
        />
      ))
    )}

    {/* Heart crest */}
    <path
      d="M50 13.5c-1.6-2.6-5.6-2.2-5.6 1 0 2.4 3 4.4 5.6 6.6 2.6-2.2 5.6-4.2 5.6-6.6 0-3.2-4-3.6-5.6-1z"
      fill="hsl(345 65% 55%)"
    />

    {/* Interlocked initials */}
    <text x="38" y="58" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="24" fill="hsl(345 45% 32%)">
      M
    </text>
    <text x="62" y="62" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="24" fill="url(#logo-gold)">
      S
    </text>
    <path
      d="M50 54.5c-0.9-1.5-3.2-1.3-3.2 0.6 0 1.4 1.7 2.5 3.2 3.8 1.5-1.3 3.2-2.4 3.2-3.8 0-1.9-2.3-2.1-3.2-0.6z"
      fill="hsl(345 65% 55%)"
    />

    {/* Little sparkles */}
    <path d="M18 22l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="url(#logo-gold)" />
    <path d="M82 76l0.8 1.8 1.8 0.8-1.8 0.8-0.8 1.8-0.8-1.8-1.8-0.8 1.8-0.8z" fill="url(#logo-gold)" />
  </svg>
);

const CoupleLogo = () => (
  <motion.a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="fixed top-6 left-6 z-50 flex items-center gap-2 md:gap-3 glass-card p-2 sm:pr-4 md:pr-5 py-2 border-primary/20 shadow-lg backdrop-blur-xl bg-white/10 rounded-full"
    aria-label="Maryphen — Maryam & Stephen"
  >
    <MonogramBadge />
    <div className="hidden sm:flex flex-col leading-none">
      <span className="font-cursive text-2xl md:text-3xl text-gradient-gold pr-1">Maryphen</span>
      <span className="hidden md:block mt-1 text-[9px] uppercase tracking-[0.35em] text-primary/70 font-serif">
        Maryam <span className="text-primary">♥</span> Stephen
      </span>
    </div>
  </motion.a>
);

export default CoupleLogo;
