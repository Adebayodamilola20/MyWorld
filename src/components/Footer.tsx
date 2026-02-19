import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blush via-background to-transparent" />

      {/* Decorative neon line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_10px_rgba(219,39,119,0.3)]" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-[1px] bg-primary/20" />
          <Heart className="w-6 h-6 text-primary fill-primary/10 animate-pulse neon-glow-pink" />
          <div className="w-8 h-[1px] bg-primary/20" />
        </div>

        <p className="font-cursive text-3xl md:text-4xl text-foreground/80">
          Infinity & Beyond
        </p>

        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground tracking-[0.6em] uppercase font-serif">
            Aesthetic Romance Page • 2026
          </p>
          <div className="h-1 w-1 rounded-full bg-primary/40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
