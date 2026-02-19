import { motion } from "framer-motion";

const compliments = [
    "YOU ARE BEAUTIFUL",
    "BEST GIRL EVER",
    "MY FAVORITE HUMAN",
    "10/10",
    "HAPPY BIRTHDAY",
    "MY EVERYTHING",
    "PURE MAGIC",
];

const ComplimentTicker = () => {
    // Repeating the array to ensure seamless loop
    const repeatedCompliments = [...compliments, ...compliments, ...compliments, ...compliments];

    return (
        <div className="w-full bg-background/80 backdrop-blur-sm border-y border-primary/10 py-6 overflow-hidden select-none">
            <motion.div
                className="flex whitespace-nowrap gap-12"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {repeatedCompliments.map((text, index) => (
                    <span
                        key={index}
                        className="text-2xl md:text-3xl font-serif font-bold neon-glow-pink text-primary tracking-[0.2em] flex items-center"
                    >
                        {text}
                        <span className="ml-12 text-primary/30">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default ComplimentTicker;
