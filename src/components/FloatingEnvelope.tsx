import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioLines, Pause, Play, X } from "lucide-react";

const FloatingEnvelope = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLetterVisible, setIsLetterVisible] = useState(false);
    const [isVoicePlaying, setIsVoicePlaying] = useState(false);
    const voiceAudioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        return () => voiceAudioRef.current?.pause();
    }, []);

    const toggleVoiceAudio = async () => {
        const audio = voiceAudioRef.current;
        if (!audio) return;

        if (audio.paused) {
            try {
                await audio.play();
            } catch {
                setIsVoicePlaying(false);
            }
        } else {
            audio.pause();
        }
    };

    const toggleEnvelope = () => {
        if (isOpen) {
            voiceAudioRef.current?.pause();
            setIsLetterVisible(false);
            setTimeout(() => setIsOpen(false), 500);
        } else {
            setIsOpen(true);
            setTimeout(() => setIsLetterVisible(true), 1000);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* 3D Envelope Icon */}
            {!isLetterVisible && (
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleEnvelope}
                    className="relative cursor-pointer w-20 h-16 group"
                >
                    {/* Neon Glow Background */}
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="envelope-3d w-full h-full relative">
                        {/* Front of Envelope */}
                        <div className={`absolute inset-0 bg-blush border-2 border-primary/20 rounded-lg shadow-xl z-20 transition-transform duration-500 ${isOpen ? 'translate-y-4' : ''}`}>
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/10" />
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/10" />
                            </div>
                        </div>

                        {/* Back of Envelope */}
                        <div className="absolute inset-0 bg-blush/80 border-2 border-primary/10 rounded-lg z-10" />

                        {/* Top Flap */}
                        <motion.div
                            initial={false}
                            animate={{ rotateX: isOpen ? -180 : 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-blush border-2 border-primary/20 rounded-t-lg z-30 origin-top shadow-md"
                            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                        />
                    </div>

                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold animate-bounce shadow-lg">
                        1
                    </div>
                </motion.div>
            )}

            {/* Full Screen Letter Overlay */}
            <AnimatePresence>
                {isLetterVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ y: "100%", opacity: 0, scale: 0.8 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: "100%", opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto paper-texture p-8 md:p-12 rounded-lg shadow-2xl border border-primary/10"
                        >
                            <button
                                onClick={toggleEnvelope}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
                            >
                                <X className="w-6 h-6 text-primary/60" />
                            </button>

                            <div className="font-cursive text-3xl md:text-4xl text-primary mb-8 text-center italic">
                                My Dearest Blossom,
                            </div>

                            <div className="font-handwritten text-xl md:text-2xl leading-relaxed text-foreground/80 space-y-8 text-center max-w-lg mx-auto">
                                <p>
                                    I've been thinking about all the little ways you've made my world more beautiful lately.
                                </p>
                                <p>
                                    From the way you laugh at your own jokes before you've even finished them, to the quiet strength you show when things get tough—you're a masterpiece in every sense of the word.
                                </p>
                                <p>
                                    I also want to say that I am truly sorry for hurting you a few days ago and making you feel that way. You did not deserve it, and I take responsibility for my words and actions. I love you, and I promise to be more patient, thoughtful, and careful with your heart. I will do better, and I will not make you feel that way again.
                                </p>

                                <audio
                                    ref={voiceAudioRef}
                                    src="/audio/maryam-letter.m4a"
                                    preload="metadata"
                                    onPlay={() => setIsVoicePlaying(true)}
                                    onPause={() => setIsVoicePlaying(false)}
                                    onEnded={() => setIsVoicePlaying(false)}
                                />
                                <div className="mx-auto flex w-full max-w-sm items-center gap-3 rounded-full border border-primary/20 bg-background/60 px-3 py-2 text-left shadow-lg backdrop-blur-md">
                                    <motion.div
                                        animate={isVoicePlaying ? { rotate: 360 } : { rotate: 0 }}
                                        transition={isVoicePlaying ? { duration: 6, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                                    >
                                        <AudioLines className="h-5 w-5" />
                                    </motion.div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate font-serif text-sm text-foreground">Tap here to listen</p>
                                        <p className="truncate text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                            A little message from me
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={toggleVoiceAudio}
                                        aria-label={isVoicePlaying ? "Pause voice message" : "Play voice message"}
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
                                    >
                                        {isVoicePlaying ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="ml-0.5 h-4 w-4" fill="currentColor" />}
                                    </button>
                                </div>
                                <p>
                                    This space is a small tribute to you. A gallery of our memories and a promise of etcetera. I love you more than words can carry.
                                </p>

                                <div className="pt-12">
                                    <p className="text-primary font-cursive text-4xl neon-glow-pink">
                                        Forever & Always,
                                    </p>
                                    <p className="text-foreground/60 italic mt-2">
                                        Your Favorite Human
                                    </p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-4 right-4 opacity-20">
                                <div className="w-24 h-24 border-4 border-primary rounded-full flex items-center justify-center rotate-12">
                                    <span className="font-serif text-xs uppercase tracking-widest text-primary">Certified Love</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingEnvelope;
