import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const milestones = [
  {
    date: "June 2021",
    title: "The Day We Met",
    description: "A chance encounter that changed everything. The world became more colorful.",
  },
  {
    date: "August 2021",
    title: "Our First Date",
    description: "Nervous laughter over coffee turned into hours of conversation we never wanted to end.",
  },
  {
    date: "December 2021",
    title: "First 'I Love You'",
    description: "Three words that felt like coming home. Whispered under a sky full of stars.",
  },
  {
    date: "February 2022",
    title: "Our First Trip Together",
    description: "Sunsets, adventures, and the realization that anywhere with you is paradise.",
  },
  {
    date: "Today",
    title: "Your Birthday",
    description: "Another year of you gracing this world. Every day with you is a gift I'll never take for granted.",
  },
];

const TimelineSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gradient-gold font-serif text-sm tracking-[0.3em] uppercase">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            The Timeline
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne to-transparent" />

          {milestones.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start mb-16 md:mb-20 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-gradient-gold font-serif text-sm tracking-widest uppercase">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-handwritten text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Circle marker */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-champagne border-4 border-background shadow-lg z-10 mt-1" />
              </motion.div>
            );
          })}

          {/* Final heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-4 left-6 md:left-1/2 -translate-x-1/2"
          >
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
