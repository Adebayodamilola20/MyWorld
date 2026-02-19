import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const predictions = [
    "Today, you will be treated like the queen you are.",
    "A surprise filled with love is coming your way.",
    "Your smile will brighten someone's entire week.",
    "A beautiful memory is waiting to be made today.",
    "You are the most beautiful person, inside and out.",
    "The stars are aligning for your best birthday yet!",
    "Your kindness will return to you tenfold today.",
    "Expect a long, warm hug very soon.",
];

const FortuneCookie = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prediction, setPrediction] = useState("");

    const handleOpen = () => {
        if (!isOpen) {
            const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
            setPrediction(randomPrediction);
            setIsOpen(true);
        }
    };

    return (
        <section className="py-24 flex flex-col items-center justify-center space-y-12">
            <div className="text-center space-y-4 max-w-md px-6">
                <h3 className="font-serif italic text-2xl text-foreground/80">
                    A Little Birthday Magic...
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">
                    Tap the heart to reveal your fortune
                </p>
            </div>

            <div className="relative cursor-pointer" onClick={handleOpen}>
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            whileTap={{ scale: 0.9 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                            <Heart
                                className="w-32 h-32 text-primary fill-primary/20 drop-shadow-[0_0_15px_rgba(219,39,119,0.5)]"
                                strokeWidth={1}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center space-y-8"
                        >
                            <div className="flex gap-4">
                                <motion.div
                                    initial={{ rotate: 0, x: 0 }}
                                    animate={{ rotate: -45, x: -20, opacity: 0.5 }}
                                >
                                    <Heart className="w-16 h-16 text-primary/40" strokeWidth={1} />
                                </motion.div>
                                <motion.div
                                    initial={{ rotate: 0, x: 0 }}
                                    animate={{ rotate: 45, x: 20, opacity: 0.5 }}
                                >
                                    <Heart className="w-16 h-16 text-primary/40" strokeWidth={1} />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="glass-card p-8 max-w-sm text-center border-primary/20 shadow-[0_0_30px_rgba(219,39,119,0.2)]"
                            >
                                <p className="font-cursive text-2xl md:text-3xl text-primary mb-4">
                                    {prediction}
                                </p>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                    className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Try again tomorrow
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FortuneCookie;
