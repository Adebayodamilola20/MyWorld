import { useState, useEffect } from "react";
import FloatingPetals from "@/components/FloatingPetals";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import LoveLetterSection from "@/components/LoveLetterSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import FloatingEnvelope from "@/components/FloatingEnvelope";
import FutureLoadingBar from "@/components/FutureLoadingBar";
import FortuneCookie from "@/components/FortuneCookie";
import PasswordEntry from "@/components/PasswordEntry";
import ComplimentTicker from "@/components/ComplimentTicker";
import BirthdayCake from "@/components/BirthdayCake";
import CoverflowSlider from "@/components/CoverflowSlider";
import { AnimatePresence, motion } from "framer-motion";

type FlowState = "locked" | "birthday" | "main";

const Index = () => {
  const [flowState, setFlowState] = useState<FlowState>("locked");

  const handleUnlock = () => {
    setFlowState("birthday");
  };

  const handleExtinguish = () => {
    setFlowState("main");
  };

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {flowState === "locked" && (
          <motion.div
            key="password-entry"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <PasswordEntry onUnlock={handleUnlock} />
          </motion.div>
        )}

        {flowState === "birthday" && (
          <motion.div
            key="birthday-cake"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <BirthdayCake onExtinguish={handleExtinguish} />
          </motion.div>
        )}

        {flowState === "main" && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <FloatingPetals />
            <HeroSection />
            <GallerySection />
            <LoveLetterSection />
            <TimelineSection />
            <FutureLoadingBar />
            <FortuneCookie />
            <ComplimentTicker />
            <CoverflowSlider />
            <Footer />
            <FloatingEnvelope />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
