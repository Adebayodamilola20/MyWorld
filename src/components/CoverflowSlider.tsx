import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import local assets with correct casing
import night1 from "@/assets/night1.JPG";
import night2 from "@/assets/night2.MP4";
import night3 from "@/assets/night3.MP4";
import night4 from "@/assets/night4.MP4";
import night5 from "@/assets/night5.MP4";
import night6 from "@/assets/night6.JPG";
import monikVideo from '@/assets/monik.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CARDS = [
    {
        video: night3,
        name: "A Beautiful Moment",
        caption: "Your smile lights up even my darkest days. You are the most beautiful person I know, inside and out."
    },
    {
        video: night2,
        name: "Eternal Love",
        caption: "Every second with you feels like a dream I never want to wake up from. I love you more than words can say."
    },
    {
        video: night4,
        name: "My Everything",
        caption: "You are my peace, my joy, and my greatest adventure. Thank you for being mine."
    },
    {
        video: night5,
        name: "Perfect Together",
        caption: "We fit together like pieces of a puzzle. I can't imagine a life without you by my side."
    },
    {
        image: night1,
        name: "Sunset Soulmate",
        caption: "Watching the sun go down with you is my favorite pastime. Here's to many more sunsets together."
    }
];

const CoverflowSlider: React.FC = () => {
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
                    speed={1000}
                    coverflowEffect={{
                        rotate: 35,
                        stretch: -20,
                        depth: 250,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="w-full py-12"
                >
                    {CARDS.map((card, index) => (
                        <SwiperSlide key={index} className="w-[300px] md:w-[400px]">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group border border-white/20">
                                {card.video ? (
                                    <video
                                        src={card.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
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
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .swiper-slide {
          background-position: center;
          background-size: cover;
        }
        .swiper-pagination-bullet-active {
          background: #db2777 !important;
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
