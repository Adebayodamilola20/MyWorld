import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

interface Milestone {
    date: string;
    title: string;
    description: string;
    x: number;
    y: number;
}

const milestones: Milestone[] = [
    {
        date: "November 2025",
        title: "The Day We Met",
        description: "A chance encounter that changed everything. The world became more colorful.",
        x: 20,
        y: 30,
    },
    {
        date: "January 2025",
        title: "Our First Date",
        description: "Nervous laughter at the cinema turned into hours of conversation we never wanted to end.",
        x: 45,
        y: 20,
    },
    {
        date: "21st November 2025",
        title: "First 'I Love You'",
        description: "Three words that felt like coming home. Whispered under a sky full of stars.",
        x: 75,
        y: 40,
    },
    {
        date: "January 2025",
        title: "Our First Trip Together",
        description: "Cinemas, Outdoors, and the realization that anywhere with you is paradise.",
        x: 55,
        y: 70,
    },
    {
        date: "Today",
        title: "Your Birthday",
        description: "Another year of you gracing this world. Every day with you is a gift I'll never take for granted.",
        x: 85,
        y: 80,
    },
];

const ConstellationSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Generate background stars
    const backgroundStars = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
        }));
    }, []);

    return (
        <section className="relative py-24 md:py-32 bg-[#050B18] overflow-hidden min-h-[80vh] flex flex-col justify-center">
            {/* Cinematic Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-[#0A1A3A] to-[#050B18] opacity-60" />

            {/* Decorative Nebula */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Background Stars (Lesser Stars) */}
            {backgroundStars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white opacity-20"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4">
                        <Sparkles className="text-primary w-6 h-6 animate-pulse" />
                    </div>
                    <span className="text-primary font-serif text-sm tracking-[0.3em] uppercase">
                        A Legacy Written in the Stars
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white mt-4">
                        The Constellation of Us
                    </h2>
                    <p className="text-white/60 font-handwritten text-lg mt-4 max-w-xl mx-auto">
                        Drag through the sky or hover over the stars to relive our most precious moments.
                    </p>
                </motion.div>

                {/* Constellation Canvas area */}
                <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm overflow-hidden group">

                    {/* SVG Lines connecting the stars */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.polyline
                            points={milestones.map(m => `${m.x}%,${m.y}%`).join(' ')}
                            fill="none"
                            stroke="rgba(212, 175, 55, 0.2)"
                            strokeWidth="1.5"
                            strokeDasharray="10,5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            style={{ vectorEffect: 'non-scaling-stroke' }}
                        />
                    </svg>

                    {/* Interactive Stars */}
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="absolute group/star"
                            style={{ left: `${milestone.x}%`, top: `${milestone.y}%` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Star Core */}
                            <motion.div
                                className="relative cursor-pointer"
                                whileHover={{ scale: 1.5 }}
                            >
                                <div className="absolute -inset-4 bg-primary/40 rounded-full blur-xl opacity-0 group-hover/star:opacity-100 transition-opacity" />
                                <Star
                                    className={`w-6 h-6 ${hoveredIndex === index ? "text-primary fill-primary" : "text-white/40 fill-white/10"
                                        } transition-colors duration-500`}
                                />
                            </motion.div>

                            {/* Memory Card (Floating) */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-6 w-64 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
                                    >
                                        <div className="text-primary text-[10px] font-serif tracking-widest uppercase mb-1">
                                            {milestone.date}
                                        </div>
                                        <div className="text-white font-serif text-lg mb-2">
                                            {milestone.title}
                                        </div>
                                        <div className="text-white/70 font-handwritten text-sm leading-relaxed">
                                            {milestone.description}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConstellationSection;
