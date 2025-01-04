"use client";
import AboutSection from "@/components/About/AboutSection";
import Contact from "@/components/Contact/Contact";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HeroSection from "@/components/Home/HeroSection";
import GallerySection from "@/components/Work/GallerySection";
import SkillSection from "@/components/Work/SkillSection";


export default function Home() {
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

