import CreatePortfolioSection from "@/components/Home/CreatePortfolioSection";
import CustomPortfolioWork from "@/components/Home/CustomPortfolioWork";
import HeroSection from "@/components/Home/HeroSection";
import PortfolioDescription from "@/components/Home/PortfolioDescription";
import SellAnythingSection from "@/components/Home/SellAnythingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CreatePortfolioSection />
      <PortfolioDescription />
      <CustomPortfolioWork />
      <SellAnythingSection />
    </>
  );
}