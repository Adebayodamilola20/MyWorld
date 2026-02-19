import { motion } from "framer-motion";
import she1 from "@/assets/she1.jpg";
import she2 from "@/assets/she2.jpg";
import she3 from "@/assets/she3.jpg";
import gall1 from "@/assets/gallery-1.jpg";
import gall2 from "@/assets/gallery-2.jpg";
import gall3 from "@/assets/gallery-3.jpg";
import gall4 from "@/assets/gallery-4.jpg";
import gall5 from "@/assets/gallery-5.jpg";
import gall6 from "@/assets/gallery-6.jpg";
import photo1 from "@/assets/PHOTO-2025-11-21-19-31-29.jpg";
import photo2 from "@/assets/PHOTO-2025-11-21-19-31-30.jpg";
import photo3 from "@/assets/PHOTO-2025-11-21-19-31-59.jpg";
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

const photos = [
  {
    src: her1,
    caption: "Timeless Beauty"
  },
  {
    src: she2,
    alt: "Ethereal Light",
    caption: "Soft Whispers"
  },
  {
    src: her3,
    alt: "Luxury Fabric",
    caption: "Silk & Satin"
  },
  {
    src: she4,
    caption: "Graceful Motion"
  },
  {
    src: she5,
    caption: "Velvet Dreams"
  },
  {
    src: she6,
    caption: "Luminous Soul"
  },
  {
    src: she7,
    caption: "Elegant Gaze"
  },
  {
    src: she8,
    caption: "Serene Moments"
  },
  {
    src: she9,
    caption: "Infinite Warmth"
  },
  {
    src: her2,
    caption: "Golden Whisper"
  },
  {
    src: her5,
    caption: "Floral Bloom"
  },
  {
    src: her66,
    caption: "Midnight Pearl"
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
