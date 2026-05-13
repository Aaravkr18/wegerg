import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ModelsSection } from "@/components/landing/ModelsSection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ModelsSection />
      <Footer />
    </main>
  );
}
