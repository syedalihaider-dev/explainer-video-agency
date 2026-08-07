import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Home/StatsSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import TrustedClientsSection from "@/components/Home/TrustedClientsSection";
import IndustrySection from "@/components/Home/IndustrySection";
import GreatVideosSection from "@/components/OurWork/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import PortfolioShowcase from "@/components/OurWork/PortfolioShowcase";

export const metadata = {
  title: "Explainer Video Portfolio | Our Work | Explainer Video Agency",
  description: "Browse the explainer video portfolio of one of the best explainer video agencies. SaaS, product, app demo, whiteboard and 3D explainer video services on screen.",
};

export default function OurWork() {
  return (
    <main>
      <Banner
        title="Our Professional Explainer Video Portfolio"
        description="Every film below started as a sentence somebody struggled to say out loud. Partner with an Explainer Video Agencythat has already solved your category, and see what excellence looks like at every step of the journey."
        video="/videos/home.webm"
        showPlayButton={true}
        showTrustBadges={true}
        primaryCtaText="Connect With Us"
        primaryCtaType="popup"
        secondaryCtaText="Let’s Talk"
        secondaryCtaType="chat"
      />
      <StatsSection />
      <PortfolioShowcase
        heading="Our Explainer Video Portfolio"
        category="Whiteboard Animation"
        showFilters={false}
      />
      <TestimonialSection />
      <GetQuoteSection />
      <GreatVideosSection />
      <TrustedClientsSection />
      <IndustrySection />
    </main>
  );
}
