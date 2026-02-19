import { motion } from "framer-motion";
import BokehHearts from "./BokehHearts";

const LoveLetterSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush to-background" />
      <BokehHearts />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gradient-gold font-serif text-sm tracking-[0.3em] uppercase">
            From My Heart
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Words of Appreciation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="font-handwritten text-xl md:text-2xl leading-relaxed text-foreground/80 space-y-6">
              <p>My Dearest,</p>
              <p>
                Every sunrise reminds me of the warmth you bring into my life. You are the quiet
                melody that plays in the background of all my best days, the reason my smiles
                come so easily.
              </p>
              <p>
                On this day, I want you to know — you are not just celebrated, you are
                cherished. Not just loved, but deeply, irrevocably adored.
              </p>
              <p>
                Thank you for being the most beautiful chapter of my story. Here's to
                every moment we've shared, and to every dream we've yet to live.
              </p>
              <p className="text-right text-gradient-gold mt-8">
                Forever Yours ♡
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
