"use client";
// import dynamic from 'next/dynamic';
import AboutSection from "@/components/About/AboutSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
// import ExperienceSection2 from "@/components/Experience/ExperienceSection2";
// import ExperienceSection3 from "@/components/Experience/ExperienceSection3";
import HeroSection from "@/components/Home/HeroSection";
import GallerySection from "@/components/Work/GallerySection";
import WorkSection from "@/components/Work/WorkSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      {/* <ExperienceSection2 /> */}
      {/* <ExperienceSection3 /> */}
      <GallerySection />
      {/* <SkillSection /> */}
    </>
  );
}

