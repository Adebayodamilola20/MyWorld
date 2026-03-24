import { motion } from "framer-motion";
import she1 from "@/assets/she1.jpg";
import she4 from "@/assets/she4.jpg";
import she5 from "@/assets/she5.jpg";
import she6 from "@/assets/she6.jpg";
import she7 from "@/assets/she7.jpg";
import she8 from "@/assets/she8.jpg";
import she9 from "@/assets/she9.jpg";
import her1 from "@/assets/her1.jpg";
import her2 from "@/assets/her2.jpg";
import her3 from "@/assets/her3.jpg";
import her5 from "@/assets/her5.jpg";
import her66 from "@/assets/her66.jpg";
import m7 from "@/assets/m7.jpg";
import m1 from "@/assets/m1.jpg";
import m4 from "@/assets/m4.jpg";
import m6 from "@/assets/m6.jpg";
import m8 from "@/assets/m8.jpg";
import m5 from "@/assets/m5.jpg";

const photos = [
  {
    src: m1,
    caption: "Timeless Beauty"
  },
  {
    src: m4,
    alt: "Ethereal Light",
    caption: "Soft Whispers"
  },
  {
    src: m6,
    alt: "Luxury Fabric",
    caption: "Silk & Satin"
  },
  {
    src: m8,
    caption: "Graceful Motion"
  },
  {
    src: m5,
    caption: "Velvet Dreams"
  },
];

const GallerySection = () => {
  return (
    <section className="relative py-32 md:py-48 bg-cream/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-gradient-gold font-serif text-sm tracking-[0.5em] uppercase">
            A Curated Life
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mt-6 leading-tight">
            The <span className="italic">Aesthetic</span> Archive
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="break-inside-avoid relative group"
            >
              <div className="relative overflow-hidden rounded-[2rem] glow-rose border border-white/40">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Glassmorphism Hover Card */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <div className="glass-card px-8 py-4 backdrop-blur-md border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-serif italic text-white text-xl">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
