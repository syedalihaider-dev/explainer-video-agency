import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/ExplainerVideo3D/StatsSection";
import ServicesSection from "@/components/ExplainerVideo3D/ServicesSection";
import WhyPartnerSection from "@/components/ExplainerVideo3D/WhyPartnerSection";
import ProcessSliderSection from "@/components/ExplainerVideo3D/ProcessSliderSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/ExplainerVideo3D/CostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/ExplainerVideo3D/GreatVideosSection";
import FaqSection from "@/components/ExplainerVideo3D/FaqSection";

export const metadata = {
  title: "3D Explainer Video Company | Explainer Videos Company",
  description: "A 3D explainer video company for hardware, medtech and many other brands. We build from your CAD files, quote a fixed cost and deliver in 8 to 12 weeks.",
  alternates: {
    canonical: "/3d-explainer-video-company",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ThreeDExplainerVideoCompanyPage() {
  return (
    <main>
      {/* Fold 1: Hero Banner */}
      <Banner
        title="3D Explainer Video Company For Products That Are Too Complex To Photograph"
        description="If your buyer has to imagine how the product works, you are losing to whoever explains theirs faster. We build photorealistic 3D explainer videos from your CAD data that open the housing, show the flow and hold the cross section still."
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
      <PortfolioShowcase heading="Our Latest 3D Explainer Video Projects" />

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
