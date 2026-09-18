"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "2D Animated Explainer Videos",
    description: "How long does it take your sales team to explain what the product does on a first call? A well built 2D explainer solves that permanently. We write the script around the viewer's decision, not around your feature list.",
    videoSrc: "https://player.vimeo.com/video/1064482488?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "SaaS And Product Explainer Videos",
    description: "Dashboards, workflows and feature lists turned into a story a trial user understands before they hit the paywall. Built around activation and time to first value rather than applause.",
    videoSrc: "https://player.vimeo.com/video/1201856159?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Character Animation Explainers",
    description: "Rigged characters with timing and personality, for the moments when the buying decision is emotional rather than technical. Every rig is drawn for your brand, never pulled from a template library.",
    videoSrc: "https://player.vimeo.com/video/1201855045?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics Explainers",
    description: "Data, interface and abstract concepts given movement, kinetic type and hierarchy so the eye lands exactly where the point is. The right choice when the story is the number.",
    videoSrc: "https://player.vimeo.com/video/1201856415?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Onboarding And Product Tour Videos",
    description: "In app films that lift activation, cut support tickets and get new users to their first win faster. Scripted against your actual funnel drop off, not a generic feature walkthrough.",
    videoSrc: "https://player.vimeo.com/video/1201856349?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Sales And Pitch Videos",
    description: "Short films built for investor rooms, trade shows and the deck slide that never lands on its own. Delivered in the aspect ratios your team actually sends.",
    videoSrc: "https://player.vimeo.com/video/1201855692?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      eyebrow="Our Services"
      title="What We Offer As A 2D Explainer Video Studio"
      description="Six formats, all produced in house by the same writers, illustrators, animators and sound designers. You brief one team and one producer stays accountable from script to final export."
      sliderItems={sliderItems}
      bottomCta="Book A Free Consultation"
    />
  );
};

export default ServicesSection;
