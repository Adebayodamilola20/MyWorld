const hearts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: 10 + Math.random() * 80,
  top: 10 + Math.random() * 80,
  size: 20 + Math.random() * 40,
  delay: Math.random() * 5,
}));

const BokehHearts = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bokeh"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            width: heart.size,
            height: heart.size,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="hsl(345 60% 75%)"
              opacity="0.15"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default BokehHearts;
