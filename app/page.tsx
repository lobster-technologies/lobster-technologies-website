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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://lobstertechnologies.co.ke/#webpage",
  url: "https://lobstertechnologies.co.ke",
  name: "Lobster Technologies — Business Software for Growing Companies",
  description:
    "We build custom software that gives growing businesses in Kenya real-time visibility, clean data, and the operational clarity to scale — without the chaos.",
  isPartOf: { "@id": "https://lobstertechnologies.co.ke/#website" },
  about: { "@id": "https://lobstertechnologies.co.ke/#organization" },
  inLanguage: "en-KE",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
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
