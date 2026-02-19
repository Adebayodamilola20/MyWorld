import { useEffect, useState } from "react";

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  size: 12 + Math.random() * 20,
  rotation: Math.random() * 360,
}));

const FloatingPetals = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-20"
          style={{
            left: `${petal.left}%`,
            top: "-5%",
            width: petal.size,
            height: petal.size,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationName: "petal-fall",
          }}
        >
          <svg
            viewBox="0 0 32 32"
            style={{ transform: `rotate(${petal.rotation}deg)` }}
            className="w-full h-full"
          >
            <ellipse
              cx="16"
              cy="16"
              rx="8"
              ry="14"
              fill="hsl(345 60% 75%)"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes petal-fall {
          0% { transform: translateY(-10vh) rotate(0deg) translateX(0px); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.2; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(80px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingPetals;
