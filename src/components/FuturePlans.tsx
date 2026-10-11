import { motion } from "framer-motion";
import { Camera, Film, Heart, MapPin, Plane, Sparkles, Utensils } from "lucide-react";

const plans = [
    {
        icon: Heart,
        title: "Our First Date",
        description: "A day full of laughter, good conversation, and a memory we will keep forever.",
    },
    {
        icon: Camera,
        title: "Our First Photo Together",
        description: "One picture to mark the beginning of all the moments still waiting for us.",
    },
    {
        icon: Film,
        title: "A Movie Night",
        description: "Our favorite snacks, a good film, and nowhere else we would rather be.",
    },
    {
        icon: Sparkles,
        title: "Watch the Sunset",
        description: "A quiet evening together, watching the sky change colors side by side.",
    },
    {
        icon: Utensils,
        title: "Cook Together",
        description: "Trying a new recipe, making a little mess, and enjoying every minute of it.",
    },
    {
        icon: Plane,
        title: "Our First Trip",
        description: "A new place, a shared adventure, and the realization that anywhere with you feels like home.",
    },
];

const FuturePlans = () => {
    return (
        <section className="relative overflow-hidden bg-secondary/20 py-24 md:py-32">
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <span className="text-gradient-gold font-serif text-sm uppercase tracking-[0.3em]">
                        Still To Come
                    </span>
                    <h2 className="mt-4 font-serif text-3xl text-foreground md:text-5xl">
                        Things We&apos;ll Do Together
                    </h2>
                    <p className="mt-5 font-handwritten text-lg leading-relaxed text-muted-foreground">
                        Some of our favorite memories have not happened yet. I cannot wait to make them with you.
                    </p>
                </motion.div>

                <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;

                        return (
                            <motion.div
                                key={plan.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="glass-card rounded-2xl border-primary/10 p-6 transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70">
                                        Coming soon
                                    </span>
                                </div>
                                <h3 className="font-serif text-xl text-foreground">{plan.title}</h3>
                                <p className="mt-3 font-handwritten text-lg leading-relaxed text-muted-foreground">
                                    {plan.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 flex items-center justify-center gap-2 text-primary/70">
                    <MapPin className="h-4 w-4" />
                    <span className="font-serif text-xs uppercase tracking-[0.25em]">Anywhere with you</span>
                </div>
            </div>
        </section>
    );
};

export default FuturePlans;
