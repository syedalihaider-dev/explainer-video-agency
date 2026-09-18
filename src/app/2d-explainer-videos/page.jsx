import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/ExplainerVideo2D/StatsSection";
import ServicesSection from "@/components/ExplainerVideo2D/ServicesSection";
import WhyPartnerSection from "@/components/ExplainerVideo2D/WhyPartnerSection";
import ProcessSliderSection from "@/components/ExplainerVideo2D/ProcessSliderSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/ExplainerVideo2D/CostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/ExplainerVideo2D/GreatVideosSection";
import FaqSection from "@/components/ExplainerVideo2D/FaqSection";

export const metadata = {
  title: "2D Explainer Video Studio | Explainer Videos Company",
  description: "Work with a 2D explainer video studio that scripts, storyboards and animates in 4 to 6 weeks. Fixed pricing, full ownership and a free script direction call.",
  alternates: {
    canonical: "/2d-explainer-videos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TwoDExplainerVideosPage() {
  return (
    <main>
      {/* Fold 1: Hero Banner */}
      <Banner
        title="2D Explainer Video Studio For Products That Are Hard To Explain"
        description="Most B2B and technology offers do not lose deals on the product. They lose them in the first ten seconds, when a visitor still cannot say out loud what the thing does. We script, storyboard and animate the 2D explainer video that fixes exactly that."
        video="/videos/home.webm"
        showPlayButton={true}
        showTrustBadges={true}
        primaryCtaText="Get a Quote"
        secondaryCtaText="Let's Talk"
      />

      {/* Fold 2: Stats */}
      <StatsSection />

      {/* Fold 3: Services (Carousel Slides) */}
      <ServicesSection />

      {/* Fold 4: Why Choose */}
      <WhyPartnerSection />

      {/* Fold 5: How We Work Workflow */}
      <ProcessSliderSection />

      {/* Fold 6: Latest Projects Portfolio */}
      <PortfolioShowcase heading="Our Latest 2D Explainer Video Projects" />

      {/* Fold 7: Transparent Pricing */}
      <CostSection />

      {/* Fold 8: Testimonials */}
      <TestimonialSection heading="What Clients Say About Our Explainer Video Studio" />

      {/* Fold 9: CTA / Great Videos Banner */}
      <GreatVideosSection />

      {/* Fold 10: FAQs */}
      <FaqSection />
    </main>
  );
}
