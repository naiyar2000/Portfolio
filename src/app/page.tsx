import AboutSection from "@/components/Home/AboutSection";
// import CustomPortfolioWork from "@/components/Home/CustomPortfolioWork";
import HeroSection from "@/components/Home/HeroSection";
// import PortfolioDescription from "@/components/Home/PortfolioDescription";
// import SellAnythingSection from "@/components/Home/SellAnythingSection";
import SkillSection from "@/components/Home/SkillSection";
// import WorkSection from "@/components/Home/WorkSection";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      {/* <WorkSection />
      <PortfolioDescription />
      <CustomPortfolioWork
        title={"A custom portfolio for your custom work"}
        subTitle={"Create a cohesive portfolio for your body of work, no matter what you make. Upload and manage all your files from one central hub, then use text, imagery, or videos to highlight each project."}
        image={"ui-3-750w.jpg"}
      />
      <SellAnythingSection />
      <CustomPortfolioWork
        title={"Generate on-brand content easily with Squarespace AI"}
        subTitle={"While you work on exhibiting your digital portfolio, Squarespace AI can act as your personal creative agency and provide on-brand copy you need to perfectly showcase your work. Get started with tailored recommendations to build your website with AI."}
        image={"ai-block-2-750w.jpg"}
        backgroundColor="#000000"
      /> */}
    </div>
  );
}