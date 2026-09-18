"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = "Bring Your Idea To Life With A 2D Explainer Video That Converts";
  const text = "Whether you are launching a product, explaining a service or rebuilding a page that is not converting, we start with the message and work outward. Strategy, script, design and animation from one team, with a producer who is still on the project in week six.";

  return (
    <GlobalGreatVideosSection
      title={title}
      text={text}
      ctaText="Get A Free Quote"
    />
  );
};

export default GreatVideosSection;
