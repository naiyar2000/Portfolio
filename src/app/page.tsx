// import dynamic from 'next/dynamic';
import AboutSection from "@/components/About/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import CodeSandboxSection from "@/components/Work/CodeSandboxSection";
import SkillSection from "@/components/Work/SkillSection";

// const HeroSection = dynamic(() => import('@/components/Home/HeroSection'));
// const AboutSection = dynamic(() => import('@/components/About/AboutSection'));
// const CodeSandboxSection = dynamic(() => import('@/components/Work/CodeSandboxSection'), { ssr: false });
// const SkillSection = dynamic(() => import('@/components/Work/SkillSection'), { ssr: false });


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CodeSandboxSection />
      <SkillSection />
    </div>
  );
}