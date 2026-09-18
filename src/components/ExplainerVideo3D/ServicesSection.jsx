"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "3D Product Explainer Videos",
    description: "Your product modelled, lit and filmed as it will actually exist, with the exploded and cutaway sequences a photograph can never deliver. Built from CAD so the geometry is accurate rather than approximated.",
    videoSrc: "https://player.vimeo.com/video/1065200259?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Medical Device And Mechanism Of Action Animation",
    description: "Anatomical and device animation for regulated categories, scripted with your clinical and compliance reviewers in the loop before animation begins. Accuracy that survives internal review, not just marketing approval.",
    videoSrc: "https://player.vimeo.com/video/1201854905?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Industrial And Manufacturing Process Animation",
    description: "Production lines, machinery and plant scale processes shown end to end, including the stages that are impossible to film safely or at all.",
    videoSrc: "https://player.vimeo.com/video/1201624747?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Product Launch And Crowdfunding Films",
    description: "Launch assets built before the first production unit exists, so preorders, press and funding conversations can start while manufacturing is still running.",
    videoSrc: "https://player.vimeo.com/video/1065182500?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Technical Sales And Trade Show Animation",
    description: "Silent booth loops, deck cuts and short sequences your sales engineers can drop into any conversation, all rendered from the same asset so nothing looks inconsistent.",
    videoSrc: "https://player.vimeo.com/video/1065199168?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "3D Stills, Renders And Configurator Assets",
    description: "The geometry you already paid to build, re rendered as product page imagery, spec sheet stills and 360 turntables. The cheapest asset you will ever commission, because the modelling is done.",
    videoSrc: "https://player.vimeo.com/video/1065201577?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      eyebrow="Our Services"
      title="What We Offer As A 3D Explainer Video Company"
      description="Six formats built on the same pipeline: CAD conversion, modelling, lookdev, animation and rendering, all handled in house by artists who read technical drawings without hand holding."
      sliderItems={sliderItems}
      bottomCta="Book A Free Consultation"
    />
  );
};

export default ServicesSection;
