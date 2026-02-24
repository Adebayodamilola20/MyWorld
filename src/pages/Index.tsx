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
import TogetherTimer from "@/components/TogetherTimer";
import PolaroidMemoryWall from "@/components/PolaroidMemoryWall";

type FlowState = "locked" | "birthday" | "main";

const Index = () => {
  const [flowState, setFlowState] = useState<FlowState>("locked");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Index component mounted, state:", flowState);
  }, []);

  const handleUnlock = () => {
    setFlowState("birthday");
  };

  const handleExtinguish = () => {
    setFlowState("main");
  };

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {flowState === "locked" && (
        <div className="w-full">
          <PasswordEntry onUnlock={handleUnlock} />
        </div>
      )}

      {flowState === "birthday" && (
        <div className="w-full">
          <BirthdayCake onExtinguish={handleExtinguish} />
        </div>
      )}

      {flowState === "main" && (
        <div className="w-full">
          <FloatingPetals />
          <TogetherTimer />
          <HeroSection />
          <GallerySection />
          <LoveLetterSection />
          <TimelineSection />
          <FutureLoadingBar />
          <FortuneCookie />
          <ComplimentTicker />
          <CoverflowSlider />
          <PolaroidMemoryWall />
          <Footer />
          <FloatingEnvelope />
        </div>
      )}
    </main>
  );
};

export default Index;
