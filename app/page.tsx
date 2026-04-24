import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Testimonials from "@/components/sections/Testimonials";
import WaitlistCTA from "@/components/sections/WaitlistCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <PainSection />
      <SolutionSection />
      <FeaturesSection />
      <Testimonials />
      <WaitlistCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
