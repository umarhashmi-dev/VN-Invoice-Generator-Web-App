import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { TemplatesSection } from "@/components/ui/templates-section";
import { CTASection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <CTASection />
    </div>
  );
}
