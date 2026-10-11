import { motion } from "framer-motion";
import FloralFlourish from "@/components/FloralFlourish";
import { maryamPhotos, maryamVideos, maryamVideoPosters } from "@/data/maryamMedia";

// Positions are the bouquet centres over the two-line headline
// ("The Blossom of" / "My Existence").
const SMALL = "w-12 md:w-16 lg:w-20";
const MEDIUM = "w-16 md:w-24 lg:w-28";

const letterBlooms = [
  { left: "4%", top: "8%", size: MEDIUM, rotate: -10, mirror: false },
  { left: "24%", top: "40%", size: SMALL, rotate: 15, mirror: true },
  { left: "44%", top: "2%", size: SMALL, rotate: -5, mirror: false },
  { left: "66%", top: "42%", size: SMALL, rotate: 20, mirror: true },
  { left: "93%", top: "10%", size: MEDIUM, rotate: 8, mirror: true },
  { left: "14%", top: "62%", size: SMALL, rotate: -18, mirror: false },
  { left: "40%", top: "96%", size: SMALL, rotate: 10, mirror: true },
  { left: "62%", top: "58%", size: SMALL, rotate: -12, mirror: false },
  { left: "90%", top: "92%", size: MEDIUM, rotate: 12, mirror: true },
];

const petalBackdrop = [
  { left: "12%", top: "50%", size: "w-40 md:w-56 lg:w-72", rotate: -15, mirror: false },
  { left: "50%", top: "45%", size: "w-44 md:w-64 lg:w-80", rotate: 5, mirror: true },
  { left: "86%", top: "55%", size: "w-40 md:w-56 lg:w-72", rotate: 18, mirror: true },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush via-background to-cream" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(345 60% 85% / 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Floating Sparkles/Neons */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full blur-[1px] animate-pulse neon-glow-pink" />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full blur-[1px] animate-pulse delay-700 neon-glow-pink" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center gap-8 md:gap-10 py-12 md:py-16">
        {/* Portrait - High end photography slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Slanted cards peeking out behind the main portrait */}
          <motion.div
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 1, x: "-62%", rotate: -12 }}
            transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-[85%] h-[88%] rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl bg-muted"
          >
            <img src={maryamPhotos[0].src} alt={maryamPhotos[0].alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-black/20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 1, x: "62%", rotate: 12 }}
            transition={{ duration: 1.1, delay: 0.75, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-[85%] h-[88%] rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl bg-muted"
          >
            <img src={maryamPhotos[2].src} alt={maryamPhotos[2].alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-black/20" />
          </motion.div>

          <div className="relative z-10 w-64 h-80 md:w-80 md:h-[28rem] lg:w-[28rem] lg:h-[35rem] rounded-3xl overflow-hidden glow-rose border-4 border-white/20 bg-muted">
            <video
              src={maryamVideos[10]}
              poster={maryamVideoPosters[10]}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              controls={false}
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glassmorphism Captions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute z-20 -left-4 md:-left-12 top-12 glass-card px-6 py-4 shadow-2xl border border-white/40"
          >
            <span className="font-serif italic text-primary text-lg">Sophistication</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute z-20 -right-4 md:-right-12 bottom-20 glass-card px-6 py-4 shadow-2xl border border-white/40"
          >
            <span className="font-serif italic text-primary text-lg">Grace</span>
          </motion.div>

          {/* Glass overlay label */}
          <div className="absolute z-20 -bottom-6 left-1/2 -translate-x-1/2 glass-card px-8 py-4 backdrop-blur-xl border border-white/50 shadow-2xl">
            <span className="text-gradient-gold font-serif text-base tracking-[0.4em] uppercase font-semibold whitespace-nowrap">
              Ethereal Love
            </span>
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          {/* Colourful flowers growing on and behind the lettering */}
          <div className="relative mb-8">
            {/* Faded bouquets behind the words */}
            <div className="absolute inset-0 z-0 opacity-25">
              {petalBackdrop.map((f, i) => (
                <FloralFlourish
                  key={`bg-${i}`}
                  mirror={f.mirror}
                  delay={1}
                  className={`absolute ${f.size}`}
                  style={{ left: f.left, top: f.top, x: "-50%", y: "-50%", rotate: f.rotate }}
                />
              ))}
            </div>

            <h1 className="relative z-10 font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-foreground">
              The <span className="neon-glow-pink">Blossom</span> of My{" "}
              <span className="text-gradient-gold italic">Existence</span>
            </h1>

            {/* Little bouquets sitting on the letters */}
            {letterBlooms.map((f, i) => (
              <FloralFlourish
                key={`fg-${i}`}
                mirror={f.mirror}
                delay={1.2 + i * 0.12}
                className={`absolute z-20 ${f.size}`}
                style={{ left: f.left, top: f.top, x: "-50%", y: "-50%", rotate: f.rotate }}
              />
            ))}
          </div>
          <p className="font-cursive text-2xl md:text-3xl lg:text-4xl text-muted-foreground/80">
            A celebration of soft luxury and timeless affection
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
