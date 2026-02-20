import { motion } from "framer-motion";
import Video from "@/assets/monik.mp4";

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
          <div className="w-64 h-80 md:w-80 md:h-[28rem] lg:w-[28rem] lg:h-[35rem] rounded-3xl overflow-hidden glow-rose border-4 border-white/20 bg-muted">
            <video
              src={Video}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              controls={false}
              preload="auto"
              onLoadedData={(e) => e.currentTarget.play()}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glassmorphism Captions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -left-4 md:-left-12 top-12 glass-card px-6 py-4 shadow-2xl border border-white/40"
          >
            <span className="font-serif italic text-primary text-lg">Sophistication</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute -right-4 md:-right-12 bottom-20 glass-card px-6 py-4 shadow-2xl border border-white/40"
          >
            <span className="font-serif italic text-primary text-lg">Grace</span>
          </motion.div>

          {/* Glass overlay label */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card px-8 py-4 backdrop-blur-xl border border-white/50 shadow-2xl">
            <span className="text-gradient-gold font-serif text-base tracking-[0.4em] uppercase font-semibold">
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
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-foreground mb-8">
            The <span className="neon-glow-pink">Blossom</span> of My{" "}
            <span className="text-gradient-gold italic">Existence</span>
          </h1>
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
