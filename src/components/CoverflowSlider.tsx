import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import AutoplayVideo from '@/components/AutoplayVideo';

// Import local assets with correct casing
import { maryamVideos, maryamVideoPosters } from "@/data/maryamMedia";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const CARDS = [
    {
        video: maryamVideos[0],
        poster: maryamVideoPosters[0],
        name: "A Beautiful Moment",
        caption: "Your smile lights up even my darkest days. You are the most beautiful person I know, inside and out."
    },
    {
        video: maryamVideos[1],
        poster: maryamVideoPosters[1],
        name: "Eternal Love",
        caption: "Every second with you feels like a dream I never want to wake up from. I love you more than words can say."
    },
    {
        video: maryamVideos[2],
        poster: maryamVideoPosters[2],
        name: "My Everything",
        caption: "You are my peace, my joy, and my greatest adventure. Thank you for being mine."
    },
    {
        video: maryamVideos[3],
        poster: maryamVideoPosters[3],
        name: "Perfect Together",
        caption: "We fit together like pieces of a puzzle. I can't imagine a life without you by my side."
    },
    {
        video: maryamVideos[4],
        poster: maryamVideoPosters[4],
        name: "Sunset Soulmate",
        caption: "Watching the sun go down with you is my favorite pastime. Here's to many more sunsets together."
    }
];

// Loop mode needs more slides than fit on screen, so the cards repeat;
// the dots below still show one per real memory.
const LOOP_SLIDES = [...CARDS, ...CARDS, ...CARDS];

const CoverflowSlider: React.FC = () => {
    const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
    const [activeCard, setActiveCard] = useState(0);

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-pink-50/30">
            {/* Moving Pink Aura Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(219,39,119,0.1)_0%,rgba(219,39,119,0)_70%)] animate-pulse" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/20 blur-[100px] rounded-full animate-float-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full animate-float-slower" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Our Gallery of Memories</h2>
                    <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
                </motion.div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    speed={1800}
                    coverflowEffect={{
                        rotate: 35,
                        stretch: -20,
                        depth: 250,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    onSwiper={setSwiper}
                    onSlideChange={(s) => setActiveCard(s.realIndex % CARDS.length)}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    className="w-full py-12"
                >
                    {LOOP_SLIDES.map((card, index) => (
                        <SwiperSlide key={index} className="w-[300px] md:w-[400px]">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group border border-white/20">
                                {card.video ? (
                                    <AutoplayVideo
                                        src={card.video}
                                        poster={card.poster}
                                        preload="auto"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}

                                {/* Glassmorphism Text Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/10 backdrop-blur-md border-t border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-serif text-white mb-2">{card.name}</h3>
                                    <p className="text-sm text-white/90 font-handwritten italic leading-relaxed">
                                        "{card.caption}"
                                    </p>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    ❤️
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-2 mt-4">
                    {CARDS.map((card, index) => (
                        <button
                            key={card.name}
                            type="button"
                            aria-label={`Show ${card.name}`}
                            onClick={() => swiper?.slideToLoop(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                activeCard === index ? 'w-6 bg-[#db2777]' : 'w-2 bg-gray-400/60'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .swiper-wrapper, .swiper-slide {
          transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1) !important;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
      `}} />
        </section>
    );
};

export default CoverflowSlider;
