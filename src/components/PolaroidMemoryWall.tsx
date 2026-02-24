import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Move, RotateCw, Heart } from "lucide-react";

interface PolaroidProps {
    id: number;
    image: string;
    rotation: number;
    x: number;
    y: number;
    caption: string;
    note: string;
}

const memories: PolaroidProps[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1518199266791-739f69a9b4b76?q=80&w=400&h=500&fit=crop",
        rotation: -5,
        x: -100,
        y: -50,
        caption: "The first smile I fell for",
        note: "I still remember how you looked that day. You wore that blue sweater and your eyes caught the light in a way I'll never forget."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1511733334857-e892c51b7d5e?q=80&w=400&h=500&fit=crop",
        rotation: 8,
        x: 120,
        y: 30,
        caption: "Magic in the air",
        note: "The world just stopped when we were dancing in the rain. I knew right then that I wanted to spend every rainstorm with you."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1522673607200-164483ee062e?q=80&w=400&h=500&fit=crop",
        rotation: -12,
        x: 50,
        y: -120,
        caption: "Our secret spot",
        note: "Nobody knows about the bridge where we carved our initials. It's our little corner of the universe."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1494972308845-d171197ede17?q=80&w=400&h=500&fit=crop",
        rotation: 4,
        x: -80,
        y: 100,
        caption: "Coffee & Conversations",
        note: "Could have stayed in that cafe forever. You make mundane moments feel like a movie."
    }
];

const Polaroid = ({ memory }: { memory: PolaroidProps }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [zIndex, setZIndex] = useState(10);

    return (
        <motion.div
            drag
            dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
            onDragStart={() => setZIndex(50)}
            onDragEnd={() => setZIndex(20)}
            initial={{
                x: memory.x,
                y: memory.y,
                rotate: memory.rotation,
                opacity: 0,
                scale: 0.8
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: memory.id * 0.1 }
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            style={{ zIndex }}
            className="absolute cursor-grab active:cursor-grabbing"
        >
            <div
                className="relative w-64 h-80 perspective-1000 group"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    className="w-full h-full relative preserve-3d shadow-xl"
                >
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden bg-white p-3 pb-12 rounded-sm border border-black/5">
                        <div className="w-full h-full bg-slate-100 overflow-hidden relative grayscale-[0.2] contrast-[1.1]">
                            <img
                                src={memory.image}
                                alt={memory.caption}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 text-center">
                            <span className="font-handwritten text-xl text-slate-800 opacity-80 decoration-primary/30">
                                {memory.caption}
                            </span>
                        </div>

                        {/* Interaction Hint */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <RotateCw className="w-4 h-4 text-slate-400" />
                        </div>
                    </div>

                    {/* Back Side */}
                    <div
                        className="absolute inset-0 backface-hidden bg-[#fdfcf0] p-6 rounded-sm border border-black/5 rotate-y-180 flex flex-col justify-center items-center text-center shadow-inner"
                        style={{ backgroundImage: "radial-gradient(#d1d1d1 0.5px, transparent 0.5px)", backgroundSize: "15px 15px" }}
                    >
                        <div className="mb-4">
                            <Heart className="w-6 h-6 text-primary/40 fill-primary/10" />
                        </div>
                        <p className="font-handwritten text-lg text-slate-700 leading-relaxed italic">
                            "{memory.note}"
                        </p>
                        <div className="mt-6 text-xs text-slate-400 font-serif tracking-widest uppercase">
                            Forever Yours
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const PolaroidMemoryWall = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-background py-24 overflow-hidden border-t border-primary/5">
            <div className="container mx-auto px-6 relative z-10 text-center mb-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-serif text-sm tracking-[0.4em] uppercase">
                        Fragments of Love
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-4">
                        The Memory Wall
                    </h2>
                    <p className="text-muted-foreground font-handwritten text-xl max-w-xl mx-auto">
                        Drag these memories around. <br /> Tap to see the secret note I left on the back of each one.
                    </p>
                </motion.div>
            </div>

            {/* The Wall (Interactive Area) */}
            <div className="relative w-full max-w-5xl h-[600px] mx-auto">
                <div className="absolute inset-0 bg-primary/2 rounded-[3rem] blur-3xl pointer-events-none" />

                {memories.map((memory) => (
                    <Polaroid key={memory.id} memory={memory} />
                ))}

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 text-muted-foreground/40 text-sm">
                    <Move className="w-4 h-4 animate-bounce" />
                    <span className="font-serif tracking-widest uppercase">Move & Interact</span>
                </div>
            </div>
        </section>
    );
};

export default PolaroidMemoryWall;
