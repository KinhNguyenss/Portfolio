import { WarmNav } from "./components/WarmNav";
import { WarmHero } from "./components/WarmHero";
import { TechMarquee } from "./components/TechMarquee";
import { WarmAboutSection } from "./components/WarmAboutSection";
import { WarmProjectsSection } from "./components/WarmProjectsSection";
import { WarmAwardsSection } from "./components/WarmAwardsSection";
import { WarmContactFooter } from "./components/WarmContactFooter";

export default function App() {
  return (
    <div
      style={{
        background: "#1A1817",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <WarmNav />
      <WarmHero />
      <TechMarquee />
      <WarmAboutSection />
      <WarmProjectsSection />
      <WarmAwardsSection />
      <WarmContactFooter />
    </div>
  );
}
