"use client";
// import AboutSection from "@/components/About/AboutSection";
import Contact from "@/components/Contact/Contact";
import DemoBook from "@/components/Demo/Demo";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HeroSection from "@/components/Home/HeroSection";
import { BackgroundBeams } from "@/components/ui/background-beam";
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import GallerySection from "@/components/Work/GallerySection";
import SkillSection from "@/components/Work/SkillSection";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";
import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import { Work } from "@/components/Work/Work";


export default function Home() {
  const setIsHome = useAppStore(state => state.setIsHome)
  const isMobile = useClientMediaQuery('(max-width: 600px)')

  useEffect(() => {
    setIsHome(true)
  }, [])


  return (
    <>
      <HeroSection />
      <SkillSection />
      {true ?
        <GallerySection />
        : <Work />
      }
      {
        isMobile ? <ExperienceSection /> : <ContainerScroll
          titleComponent={<></>}>
          <>
            <ExperienceSection />
            <BackgroundBeams />
          </>
        </ContainerScroll>
      }
      {/* <DemoBook /> */}
      <Contact />
    </>
  );
}

