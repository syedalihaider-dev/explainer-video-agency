"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      We make great <span>explainer videos</span>, just for you.
    </>
  );

  const text = "In a world of templates and recycled stock, a custom explainer is a breath of fresh air. You already know a film is the fastest way to be understood. What you may not know is that a professional explainer video studio makes the production easier than it has ever been. If you have an idea, we can build it.";

  return <GlobalGreatVideosSection title={title} text={text} ctaText="Get A Quote" />;
};

export default GreatVideosSection;
