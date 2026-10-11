import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music2, Pause, Play } from "lucide-react";
import { getSong } from "@/lib/song";

const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(getSong());
    const pausedByUserRef = useRef(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasAudioError, setHasAudioError] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.75;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleError = () => setHasAudioError(true);

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);
        audio.addEventListener("error", handleError);

        setIsPlaying(!audio.paused);

        // Start as soon as the main site opens. The password tap has already
        // unlocked audio on phones; if it's still blocked, start on the next tap.
        const startOnTap = (e: Event) => {
            removeTapListeners();
            // The play/pause button handles its own taps
            if ((e.target as Element | null)?.closest("[data-music-toggle]")) return;
            if (audio.paused && !pausedByUserRef.current) audio.play().catch(() => {});
        };
        const removeTapListeners = () => {
            document.removeEventListener("touchstart", startOnTap);
            document.removeEventListener("click", startOnTap);
        };
        audio.play().catch(() => {
            document.addEventListener("touchstart", startOnTap, { passive: true });
            document.addEventListener("click", startOnTap);
        });

        return () => {
            audio.pause();
            removeTapListeners();
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("error", handleError);
        };
    }, []);

    const togglePlayback = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            pausedByUserRef.current = false;
            try {
                await audio.play();
            } catch {
                setIsPlaying(false);
            }
        } else {
            pausedByUserRef.current = true;
            audio.pause();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="fixed bottom-4 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-sm"
        >
            <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-background/85 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={isPlaying ? { duration: 6, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                >
                    <Music2 className="h-5 w-5" />
                </motion.div>

                <div className="min-w-0 flex-1 text-left">
                    <p className="truncate font-serif text-sm text-foreground">Stuck on You</p>
                    <p className="truncate text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Lionel Richie
                    </p>
                </div>

                <button
                    type="button"
                    onClick={togglePlayback}
                    data-music-toggle
                    aria-label={isPlaying ? "Pause Stuck on You" : "Play Stuck on You"}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
                >
                    {isPlaying ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="ml-0.5 h-4 w-4" fill="currentColor" />}
                </button>
            </div>

            {hasAudioError && (
                <p className="mt-1 text-center text-[10px] text-muted-foreground">
                    Unable to load the song file.
                </p>
            )}
        </motion.div>
    );
};

export default MusicPlayer;
