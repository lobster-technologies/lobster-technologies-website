import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import Problem from "@/components/sections/Problem";
import HowWeWork from "@/components/sections/HowWeWork";
import Capabilities from "@/components/sections/Capabilities";
import FeaturedProject from "@/components/sections/FeaturedProject";
import WhyLobster from "@/components/sections/WhyLobster";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Problem />
        <HowWeWork />
        <Capabilities />
        <FeaturedProject />
        <WhyLobster />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
