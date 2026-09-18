"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "SaaS Positioning Explainer Videos",
    description: "The homepage film. Sixty to ninety seconds that tell a cold visitor what the product is, who it is for and what changes once they have it. Built to be the first thing above the fold and the last thing they need before they sign up.",
    videoSrc: "https://player.vimeo.com/video/1065200259?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Product Tour And Feature Videos",
    description: "For the visitor who already gets the pitch and now wants proof. We animate your actual workflows in vector UI, simplified to the path that matters, so the product looks as clear as your marketing claims it is.",
    videoSrc: "https://player.vimeo.com/video/1201854905?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "In App Onboarding And Activation Videos",
    description: "Short films that live inside the product and get a new user to their first real outcome faster. Scripted against your actual funnel drop off rather than a generic feature tour, because activation is where most trials are lost.",
    videoSrc: "https://player.vimeo.com/video/1201624747?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Demo And Walkthrough Videos",
    description: "Longer form, task led films for pricing pages, sales calls and the help centre. The format that answers how this actually works, without a salesperson having to repeat it for the fortieth time.",
    videoSrc: "https://player.vimeo.com/video/1065182500?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Feature Launch And Release Videos",
    description: "Every shipped feature deserves more than a changelog entry. We build a reusable template and style system so each launch video costs a fraction of the first one and still looks like it came from the same product.",
    videoSrc: "https://player.vimeo.com/video/1065199168?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Sales Enablement And Pitch Videos",
    description: "Assets your sales team sends before the call and your founders use in investor rooms. Same message as the homepage, cut for a different room, delivered in the aspect ratios your team actually sends.",
    videoSrc: "https://player.vimeo.com/video/1065201577?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      eyebrow="Our Services"
      title="What We Offer As A SaaS Explainer Video Company"
      description="Six formats mapped to the six places software loses people, all produced in house by writers who have worked in product marketing and animators who build interfaces in vector rather than recording them."
      sliderItems={sliderItems}
      bottomCta="Book A Free Consultation"
    />
  );
};

export default ServicesSection;
