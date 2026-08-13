import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Home/StatsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import WhyInvestSection from "@/components/Home/WhyInvestSection";
import WhyPartnerSection from "@/components/Home/WhyPartnerSection";
import GetQuoteSection from "@/components/Common/GetQuoteSection";
import ProcessSliderSection from "@/components/Home/ProcessSliderSection";
import IndustrySection from "@/components/Home/IndustrySection";
import TrustedClientsSection from "@/components/Home/TrustedClientsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Home/FaqSection";

/*
const bannerSlides = [
  {
    title: "Professional Video Animation Company - High Impact Animation Services",
    description: "Why do so many brands invest in animation and see almost no return? Because most animation studios are hired to make something that looks good, and looking good is not a business outcome. Your competitors have slick videos too. The ones winning with video are the ones whose content was built around what their audience actually needed to understand to take the next step. That is the gap Explainer Video Company. was built to close. Our premium animation services include 2D explainers, 3D immersive visualizations, whiteboard animations, and motion graphics designed to convert attention into action."
  },
  {
    title: "Your Go-To Animation Studio for Animation Services",
    description: "At Explainer Video Company., we operate differently. We ask what the video is supposed to accomplish before we touch the timeline. We build around your funnel, your audience's psychology, and the specific moment in the customer journey where the video will live. Our animation services run the full creative and production spectrum. Concept development, scriptwriting, character design, storyboarding, full animation, voiceover direction, sound design, and final delivery."
  },
  {
    title: "Animation Services That Fit Your Brand & Your Goals",
    description: "Don’t worry, Our team 2D & 3D animation services in the USA always begin with a genuine discovery process. We learn about your product, your audience, your brand voice, your market positioning, and precisely what you want a viewer to think, feel, or do after watching the video."
  }
];
*/

export const metadata = {
  title: "Best Explainer Video Agency Explainer Video Agency",
  description: "Explainer Video Agency is a professional Explainer Video Agency producing SaaS, product and animated explainer videos that makes your product & business easier to explain.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <Banner
        /* Slider preserved for future use:
        slides={bannerSlides}
        */
        title="Explainer Video Agency For Products That Are Hard To Explain"
        description="We are a professional explainer video studio built for the moment your buyer says I still do not get it. From SaaS and product explainer videos to animated brand films, whiteboard and motion graphics, our explainer video services take a complicated offer and hand it back as ninety seconds a stranger actually finishes."
        video="/videos/home.webm"
        showPlayButton={true}
        showTrustBadges={true}
        primaryCtaText="Discuss Your Project"
        secondaryCtaText="Let's Talk"
      />
      <StatsSection />
      <ServicesSection />
      <WhyInvestSection />
      <PortfolioShowcase
        heading="Explainer Video Portfolio"
        description="Films made for founders, product marketers and agencies who needed the message to survive a cold audience and a small screen."
        showFilters={false}
        category="Whiteboard Animation"
      />
      <WhyPartnerSection />
      <GetQuoteSection />
      <ProcessSliderSection />
      <TrustedClientsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
