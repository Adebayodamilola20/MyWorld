import { useId } from "react";
import { motion, type MotionStyle } from "framer-motion";

// A colourful bouquet (hibiscus, cosmos, lilies, daisies, sprigs) that sits
// on the hero lettering. Drawn in a 320x280 box around its centre.

const petal = (l: number, w: number) =>
  `M0 0 C ${-w} ${-l * 0.3} ${-w * 0.8} ${-l} 0 ${-l} C ${w * 0.8} ${-l} ${w} ${-l * 0.3} 0 0Z`;
const pointed = (l: number, w: number) =>
  `M0 0 C ${-w} ${-l * 0.4} ${-w * 0.3} ${-l * 0.9} 0 ${-l} C ${w * 0.3} ${-l * 0.9} ${w} ${-l * 0.4} 0 0Z`;

const pop = (delay: number) => ({
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { delay, type: "spring" as const, stiffness: 140, damping: 12 },
  style: { transformBox: "fill-box" as const, transformOrigin: "center" },
});

const leaves = [
  { r: -150, l: 88 }, { r: -112, l: 72 }, { r: -62, l: 92 }, { r: -22, l: 70 },
  { r: 28, l: 86 }, { r: 78, l: 74 }, { r: 128, l: 92 }, { r: 168, l: 70 },
];

const babyBreath = [
  [70, 70], [78, 62], [64, 80], [262, 196], [270, 206], [254, 210], [200, 52], [208, 44], [96, 228], [104, 236],
];

const sprigs = [
  { from: [118, 122], to: [42, 92] },
  { from: [206, 188], to: [282, 232] },
];

const lavender = [
  { x: 182, y: 108, r: 32 },
  { x: 132, y: 182, r: -150 },
];

type FloralFlourishProps = {
  className?: string;
  style?: MotionStyle;
  mirror?: boolean;
  delay?: number;
};

const FloralFlourish = ({ className = "", style, mirror = false, delay = 1.2 }: FloralFlourishProps) => {
  const id = useId().replace(/:/g, "");
  const g = (name: string) => `url(#${name}-${id})`;

  return (
    <motion.svg
      viewBox="0 0 320 280"
      className={`pointer-events-none overflow-visible ${className}`}
      aria-hidden="true"
      style={style}
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 90, damping: 14 }}
    >
      <defs>
        <linearGradient id={`leaf-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4f8a57" />
          <stop offset="100%" stopColor="#a8d5a2" />
        </linearGradient>
        <linearGradient id={`hib-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#e8457c" />
          <stop offset="35%" stopColor="#fbd3df" />
          <stop offset="100%" stopColor="#fffaf2" />
        </linearGradient>
        <linearGradient id={`cos-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#b0125b" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <linearGradient id={`lily-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#fff5f8" />
          <stop offset="100%" stopColor="#f06fa0" />
        </linearGradient>
        <linearGradient id={`peach-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ff9a76" />
          <stop offset="100%" stopColor="#ffd6b8" />
        </linearGradient>
      </defs>

      <g transform={mirror ? "translate(320 0) scale(-1 1)" : undefined}>
        <motion.g
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          {/* Leaves */}
          {leaves.map((leaf, i) => (
            <g key={i} transform={`translate(160 140) rotate(${leaf.r})`}>
              <path d={pointed(leaf.l, 17)} fill={g("leaf")} />
              <path d={`M0 0 L0 ${-leaf.l * 0.9}`} stroke="#3f7247" strokeWidth="0.8" opacity="0.5" />
            </g>
          ))}

          {/* Yellow sprigs */}
          {sprigs.map(({ from, to }, i) => (
            <g key={i}>
              <path
                d={`M${from[0]} ${from[1]} Q ${(from[0] + to[0]) / 2} ${to[1] - 14} ${to[0]} ${to[1]}`}
                stroke="#7aa35f"
                strokeWidth="1.4"
                fill="none"
              />
              {[0.35, 0.55, 0.72, 0.86, 1].map((t, j) => (
                <circle
                  key={j}
                  cx={from[0] + (to[0] - from[0]) * t + (j % 2 ? 4 : -4)}
                  cy={from[1] + (to[1] - from[1]) * t - 6}
                  r={3.4}
                  fill={j % 2 ? "#f9d84a" : "#f5b82e"}
                />
              ))}
            </g>
          ))}

          {/* Lavender spikes */}
          {lavender.map((s, i) => (
            <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
              <path d="M0 0 L0 -70" stroke="#7aa35f" strokeWidth="1.4" />
              {[22, 32, 42, 52, 62].map((y, j) => (
                <ellipse key={j} cx={j % 2 ? 3 : -3} cy={-y} rx="4" ry="6" fill={j % 2 ? "#b39ddb" : "#9575cd"} />
              ))}
            </g>
          ))}

          {/* Open lily */}
          <motion.g {...pop(delay + 0.5)}>
            <g transform="translate(218 92) rotate(35)">
              {[-55, -25, 5, 35, 62].map((r) => (
                <path key={r} d={pointed(46, 13)} fill={g("lily")} transform={`rotate(${r})`} stroke="#fff" strokeOpacity="0.6" strokeWidth="0.6" />
              ))}
              {[-20, 0, 20].map((r) => (
                <g key={r} transform={`rotate(${r})`}>
                  <path d="M0 0 L0 -30" stroke="#d9a33a" strokeWidth="1" />
                  <ellipse cx="0" cy="-31" rx="2" ry="3.5" fill="#a0522d" />
                </g>
              ))}
            </g>
          </motion.g>

          {/* Lily bud */}
          <motion.g {...pop(delay + 0.7)}>
            <g transform="translate(96 192) rotate(-128)">
              <path d={pointed(44, 10)} fill={g("lily")} />
              <path d={pointed(40, 7)} fill="#f48fb1" opacity="0.6" transform="rotate(12)" />
            </g>
          </motion.g>

          {/* Magenta cosmos */}
          <motion.g {...pop(delay + 0.2)}>
            <g transform="translate(124 150) rotate(10)">
              {Array.from({ length: 8 }, (_, i) => (
                <path key={i} d={petal(42, 16)} fill={g("cos")} transform={`rotate(${i * 45})`} stroke="#fff" strokeOpacity="0.35" strokeWidth="0.8" />
              ))}
              <circle r="11" fill="#4a1030" />
              {Array.from({ length: 10 }, (_, i) => (
                <circle key={i} cx={Math.cos((i * Math.PI) / 5) * 9} cy={Math.sin((i * Math.PI) / 5) * 9} r="1.8" fill="#f9d84a" />
              ))}
            </g>
          </motion.g>

          {/* Peach blossom */}
          <motion.g {...pop(delay + 0.6)}>
            <g transform="translate(236 142)">
              {Array.from({ length: 6 }, (_, i) => (
                <path key={i} d={petal(24, 11)} fill={g("peach")} transform={`rotate(${i * 60 + 15})`} />
              ))}
              <circle r="6" fill="#f5b82e" />
            </g>
          </motion.g>

          {/* White hibiscus */}
          <motion.g {...pop(delay + 0.35)}>
            <g transform="translate(184 166) rotate(-8)">
              {Array.from({ length: 5 }, (_, i) => (
                <path key={i} d={petal(56, 26)} fill={g("hib")} transform={`rotate(${i * 72})`} stroke="#f7c6d4" strokeWidth="0.8" />
              ))}
              <circle r="8" fill="#e8457c" opacity="0.85" />
              <path d="M0 0 C 6 -12 10 -22 18 -30" stroke="#e8457c" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              {[[-2, 0], [3, -4], [-3, -6], [2, 3]].map(([dx, dy], i) => (
                <circle key={i} cx={18 + dx} cy={-30 + dy} r="2" fill="#f5b82e" />
              ))}
            </g>
          </motion.g>

          {/* White daisy */}
          <motion.g {...pop(delay + 0.5)}>
            <g transform="translate(150 94)">
              {Array.from({ length: 12 }, (_, i) => (
                <path key={i} d={petal(20, 6)} fill="#ffffff" stroke="#f3e5ea" strokeWidth="0.6" transform={`rotate(${i * 30})`} />
              ))}
              <circle r="6.5" fill="#f5b82e" />
              <circle r="3" fill="#e09a1a" />
            </g>
          </motion.g>

          {/* Baby's breath */}
          {babyBreath.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.6" fill="#ffffff" stroke="#e9dbe0" strokeWidth="0.6" />
          ))}
        </motion.g>
      </g>
    </motion.svg>
  );
};

export default FloralFlourish;
