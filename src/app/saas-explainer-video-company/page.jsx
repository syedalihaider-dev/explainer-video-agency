import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/ExplainerVideoSaaS/StatsSection";
import ServicesSection from "@/components/ExplainerVideoSaaS/ServicesSection";
import WhyPartnerSection from "@/components/ExplainerVideoSaaS/WhyPartnerSection";
import ProcessSliderSection from "@/components/ExplainerVideoSaaS/ProcessSliderSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/ExplainerVideoSaaS/CostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/ExplainerVideoSaaS/GreatVideosSection";
import FaqSection from "@/components/ExplainerVideoSaaS/FaqSection";

export const metadata = {
  title: "SaaS Explainer Video Company | Explainer Videos Company",
  description: "A SaaS explainer video company for product led teams. Positioning films, product tours and in app onboarding, scripted by product marketers. Get a Free Quote.",
  alternates: {
    canonical: "/saas-explainer-video-company",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SaaSExplainerVideoCompanyPage() {
  return (
    <main>
      {/* Fold 1: Hero Banner */}
      <Banner
        title="SaaS Explainer Video Company Built Around Trial To Paid Conversion"
        description="Your team knows the product too well to explain it simply. That is the actual problem, and it is why the homepage keeps growing and the trial keeps leaking. We write and animate the SaaS explainer video that makes the value land before the visitor gives up."
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
      <PortfolioShowcase heading="Our Latest SaaS Explainer Video Projects" />

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
