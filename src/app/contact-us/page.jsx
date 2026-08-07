import Banner from "@/components/Common/Banner/Banner";
import ContactFormSection from "@/components/Contact/ContactFormSection";

export const metadata = {
  title: "Contact Us - Get An Explainer Video Quote In Less Than 24 Hours",
  description: "Talk to an explainer video strategist. Send your brief and get a cost quote within 24 hours from a professional explainer video studio serving globally.",
  keywords: "",
}

export default function ContactUsPage() {
  return (
    <main>
      <Banner
        title="Let Us Turn Your Idea Into Ninety Seconds That Work"
        description="Ready to start? Whether you want a cost quote, a second opinion on a script you already have, or a straight answer on whether animation or live action suits your product, there is a creative lead on the other side of this form."
        video="/videos/home.webm"
        showPlayButton={true}
        primaryCtaText="Get A Quote"
        secondaryCtaText="Let's Talk"
      />
      <div style={{ background: "radial-gradient(60.57% 91.94% at 69.22% 43%, #19042D 0%, #19042D 100%)" }}>
        <ContactFormSection />
      </div>
    </main>
  );
}
