import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

interface PasswordEntryProps {
    onUnlock: () => void;
}

const PasswordEntry = ({ onUnlock }: PasswordEntryProps) => {
    const [date, setDate] = useState("");
    const [error, setError] = useState(false);
    const [shake, setShake] = useState(false);

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        // You can change this date to the actual date you met
        // Common formats: DD/MM/YYYY, YYYY-MM-DD, etc.
        // For now, let's use a simple string check or a specific date.
        // I'll make it "2022-02-14" as a placeholder, but you can change it!
        const correctDate = "12/11/2025"; // User specified: November 12, 2025

        if (date === correctDate) {
            onUnlock();
        } else {
            setError(true);
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden">
            <FloatingPetals />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="z-10 w-full max-w-md px-6"
            >
                <div className="glass-card p-8 md:p-12 text-center space-y-8 backdrop-blur-xl border-primary/20 shadow-[0_0_50px_rgba(219,39,119,0.1)]">
                    <motion.div
                        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                        className="flex justify-center"
                    >
                        <Heart className="w-16 h-16 text-primary animate-pulse" fill="currentColor" opacity={0.2} />
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-serif text-primary">
                            Unlock Your Gift
                        </h1>
                        <p className="text-muted-foreground font-handwritten text-lg italic">
                            Enter the date we first met to enter our private world...
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2 text-left">
                            <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground ml-1">
                                Date (DD/MM/YYYY)
                            </label>
                            <Input
                                type="text"
                                placeholder="12/11/2025"
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    if (error) setError(false);
                                }}
                                className={`bg-background/20 border-primary/20 text-center py-6 text-xl tracking-widest focus-visible:ring-primary/30 transition-all ${error ? 'border-red-400 focus-visible:ring-red-200' : ''}`}
                            />
                            <AnimatePresence>
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-red-400 text-xs text-center italic mt-2"
                                    >
                                        That's not quite right, my love... try again?
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-6 text-lg tracking-[0.2em] uppercase bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Open Forever
                        </Button>
                    </form>

                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] pt-4">
                        A Private Space for Us
                    </p>
                </div>
            </motion.div>

            {/* Background elements to match the site vibe */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
    );
};

export default PasswordEntry;
