import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const FutureLoadingBar = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-12 space-y-8">
            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <span className="font-serif text-sm tracking-[0.2em] uppercase text-muted-foreground">
                        Memories Made
                    </span>
                    <span className="font-mono text-primary neon-glow-pink">100%</span>
                </div>
                <Progress value={100} className="h-1 bg-primary/10 [&>div]:bg-primary shadow-[0_0_10px_rgba(219,39,119,0.3)]" />
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <span className="font-serif text-sm tracking-[0.2em] uppercase text-muted-foreground">
                        Love for You
                    </span>
                    <span className="font-mono text-primary neon-glow-pink">Error: Infinity%</span>
                </div>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="h-1 bg-primary shadow-[0_0_20px_rgba(219,39,119,0.6)] rounded-full"
                />
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <span className="font-serif text-sm tracking-[0.2em] uppercase text-muted-foreground">
                        Our Future
                    </span>
                    <span className="font-mono text-primary animate-pulse">Loading...</span>
                </div>
                <div className="relative h-1 w-full bg-primary/10 overflow-hidden rounded-full">
                    <motion.div
                        className="absolute top-0 bottom-0 bg-primary shadow-[0_0_15px_rgba(219,39,119,0.4)]"
                        initial={{ left: "-40%", width: "40%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FutureLoadingBar;
