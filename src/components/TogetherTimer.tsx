import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const TogetherTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Starting date: November 12, 2025
        const startDate = new Date("2025-11-12T00:00:00");

        const calculateTime = () => {
            const now = new Date();
            const difference = now.getTime() - startDate.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        const timer = setInterval(calculateTime, 1000);
        calculateTime();

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-6 right-6 z-50 pointer-events-none md:pointer-events-auto"
        >
            <div className="glass-card p-4 md:p-5 flex flex-col items-center gap-2 border-primary/20 shadow-lg backdrop-blur-xl bg-white/10">
                <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-serif">
                        Together For
                    </span>
                </div>

                <div className="flex gap-3">
                    <TimeUnit label="Days" value={timeLeft.days} />
                    <TimeUnit label="Hrs" value={timeLeft.hours} />
                    <TimeUnit label="Min" value={timeLeft.minutes} />
                    <TimeUnit label="Sec" value={timeLeft.seconds} />
                </div>
            </div>
        </motion.div>
    );
};

const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center">
        <span className="text-xl md:text-2xl font-serif text-foreground font-semibold tabular-nums">
            {value}
        </span>
        <span className="text-[8px] uppercase tracking-widest text-muted-foreground">
            {label}
        </span>
    </div>
);

export default TogetherTimer;
