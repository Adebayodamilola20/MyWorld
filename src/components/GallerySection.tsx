import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AutoplayVideo from "@/components/AutoplayVideo";
import { archiveMedia } from "@/data/maryamMedia";

// Exact box shapes (width / height) of the 12-slot archive wall, in order.
const boxRatios = [
  4 / 3,
  3 / 4,
  4 / 3,
  3 / 4,
  834 / 1280,
  9 / 16,
  9 / 16,
  9 / 16,
  3 / 4,
  3 / 4,
  660 / 1280,
  602 / 1080,
];

const archiveSlots = archiveMedia.slice(0, boxRatios.length).map((item, i) => ({
  ...item,
  ratio: boxRatios[i],
  index: i,
}));

type ArchiveSlot = (typeof archiveSlots)[number];

// 1 column on phones, 2 on tablets, 3 on desktop (matches sm / lg breakpoints)
const getColumnCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

// Fill columns like CSS masonry: each item goes to the currently shortest column.
// Plain flex columns avoid Safari's multi-column bug where animated items vanish.
const splitIntoColumns = (slots: ArchiveSlot[], count: number) => {
  const columns: ArchiveSlot[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  slots.forEach((slot) => {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(slot);
    heights[shortest] += 1 / slot.ratio;
  });
  return columns;
};

const GallerySection = () => {
  const [columnCount, setColumnCount] = useState(getColumnCount);

  useEffect(() => {
    const onResize = () => setColumnCount(getColumnCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const columns = splitIntoColumns(archiveSlots, columnCount);

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
        <div className="flex gap-6 items-start max-w-5xl mx-auto">
          {columns.map((column, c) => (
            <div key={c} className="flex-1 min-w-0 flex flex-col gap-6">
              {column.map((item) => (
                <motion.div
                  key={item.index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: (item.index % 3) * 0.1 }}
                  className="relative group"
                >
                  <div
                    className="relative overflow-hidden rounded-[2rem] glow-rose border border-white/40 [transform:translateZ(0)]"
                    style={{ aspectRatio: item.ratio }}
                  >
                    {item.type === "video" ? (
                      <AutoplayVideo
                        src={item.src}
                        poster={item.poster}
                        aria-label={item.alt}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        preload="auto"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading={item.index < 3 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    )}

                    {/* Glassmorphism Hover Card */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                      <div className="glass-card px-8 py-4 backdrop-blur-md border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="font-serif italic text-white text-xl">
                          {item.caption}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
