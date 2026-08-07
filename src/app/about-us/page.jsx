import Banner from "@/components/Common/Banner/Banner";
import MissionSection from "@/components/About/MissionSection";
import TeamStandoutSection from "@/components/About/TeamStandoutSection";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import TrustedClientsSection from "@/components/About/TrustedClientsSection";
import IndustrySection from "@/components/Home/IndustrySection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import FaqSection from "@/components/About/FaqSection";


export const metadata = {
  title: "About Us - Inside Our Professional Explainer Video Studio",
  description: "Learn about the Mission & Vision behind Explainer Video Agency, a professional explainer video studio producing SaaS and product explainer videos worldwide.",
};

export default function AboutUs() {
  return (
    <main>
      <Banner
        title="We Turn The Sentence Nobody Understands Into The Film Everybody Finishes"
        description="Explainer Video Agency exists for the brief that makes other studios go quiet. From SaaS platforms with fourteen features to physical products that need a cutaway, our explainer video services carry a message from a rough idea to a finished frame without losing the point on the way."
        video="/videos/home.webm"
        showPlayButton={true}
        primaryCtaText="Get Started"
        secondaryCtaText="Let Us Talk"
      />
      <MissionSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <TrustedClientsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
