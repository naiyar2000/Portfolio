"use client";
// import AboutSection from "@/components/About/AboutSection";
import Contact from "@/components/Contact/Contact";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HeroSection from "@/components/Home/HeroSection";
import GallerySection from "@/components/Work/GallerySection";
import SkillSection from "@/components/Work/SkillSection";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";


export default function Home() {
  const setIsHome = useAppStore(state => state.setIsHome)
  useEffect(() => {
    setIsHome(true)
  }, [])
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <SkillSection />
      <ExperienceSection />
      <GallerySection />
      <Contact />
    </>
  );
}

