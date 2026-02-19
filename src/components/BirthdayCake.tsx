import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import BokehHearts from './BokehHearts';

interface BirthdayCakeProps {
    onExtinguish: () => void;
}

const BirthdayCake: React.FC<BirthdayCakeProps> = ({ onExtinguish }) => {
    const [blew, setBlew] = useState(false);
    const [audioPermission, setAudioPermission] = useState<boolean | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const cakeRef = useRef<HTMLDivElement>(null);
    const flameRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Neon candle animation using GSAP
        flameRefs.current.forEach((flame, index) => {
            if (flame) {
                gsap.to(flame, {
                    scaleY: 1.2,
                    scaleX: 1.1,
                    duration: 0.2 + Math.random() * 0.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: Math.random()
                });
            }
        });

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (audioContextRef.current) audioContextRef.current.close();
        };
    }, []);

    const startListening = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setAudioPermission(true);

            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);

            analyser.fftSize = 256;
            microphone.connect(analyser);

            audioContextRef.current = audioContext;
            analyserRef.current = analyser;
            microphoneRef.current = microphone;

            detectBlow();
        } catch (err) {
            console.error('Error accessing microphone:', err);
            setAudioPermission(false);
        }
    };

    const detectBlow = () => {
        if (!analyserRef.current) return;

        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const checkLevel = () => {
            analyserRef.current!.getByteFrequencyData(dataArray);
            const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;

            // Threshold for "blowing" - might need adjustment
            if (average > 60 && !blew) {
                extinguishCandles();
            }

            if (!blew) {
                animationFrameRef.current = requestAnimationFrame(checkLevel);
            }
        };

        checkLevel();
    };

    const extinguishCandles = () => {
        setBlew(true);

        // Extinguish animation
        flameRefs.current.forEach((flame, index) => {
            if (flame) {
                gsap.to(flame, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        // Show smoke effect or just transition
                    }
                });
            }
        });

        // Final transition after a short delay
        setTimeout(() => {
            onExtinguish();
        }, 2000);
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background/80 backdrop-blur-xl overflow-hidden">
            <BokehHearts />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="z-10 text-center space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary drop-shadow-[0_0_10px_rgba(219,39,119,0.3)]">
                        Happy Birthday, My Love!
                    </h2>
                    <p className="text-lg md:text-xl font-handwritten text-muted-foreground italic">
                        Make a wish and blow out the candles...
                    </p>
                </div>

                {/* 3D-Style Cake */}
                <div ref={cakeRef} className="relative w-64 h-64 mx-auto flex items-end justify-center perspective-[1000px]">
                    {/* Cake Base */}
                    <div className="relative w-full h-32 bg-pink-100 rounded-t-[50%] shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-b-4 border-pink-200">
                        {/* Frosting drips */}
                        <div className="absolute top-0 left-4 w-6 h-10 bg-pink-50 rounded-b-full"></div>
                        <div className="absolute top-0 left-16 w-8 h-14 bg-pink-50 rounded-b-full"></div>
                        <div className="absolute top-0 right-12 w-10 h-16 bg-pink-50 rounded-b-full"></div>
                        <div className="absolute top-0 right-4 w-5 h-8 bg-pink-50 rounded-b-full"></div>

                        {/* Candles */}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-4">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="relative w-3 h-16 bg-gradient-to-t from-pink-400 to-pink-200 rounded-full shadow-md">
                                    {/* Neon Flame */}
                                    {!blew && (
                                        <div
                                            ref={el => flameRefs.current[i] = el}
                                            className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-8 bg-primary rounded-full blur-[2px] shadow-[0_0_15px_#db2777,0_0_30px_#db2777]"
                                            style={{ transformOrigin: 'bottom center' }}
                                        >
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-full blur-[1px]"></div>
                                        </div>
                                    )}
                                    {/* Smoke effect */}
                                    {blew && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 0, scale: 0.5 }}
                                            animate={{ opacity: [0, 0.5, 0], y: -40, scale: [0.5, 1.5, 2] }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full blur-xl"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cake Stand */}
                    <div className="absolute -bottom-4 w-72 h-4 bg-white/50 backdrop-blur-md rounded-full shadow-lg border border-white/20"></div>
                </div>

                {!audioPermission && !blew && (
                    <Button
                        onClick={startListening}
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    >
                        I'm Ready to Blow!
                    </Button>
                )}

                {audioPermission === false && (
                    <p className="text-red-400 text-sm italic">
                        Please enable microphone access to blow out the candles!
                    </p>
                )}
            </motion.div>

            {/* Floating Heart Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 100
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: -100,
                            x: (Math.random() - 0.5) * 500 + (window.innerWidth / 2)
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        className="absolute text-primary/20"
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Internal Button component if not using shadcn
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
    <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default BirthdayCake;
