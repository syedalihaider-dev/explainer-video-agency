"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = "Make Your Product Impossible To Misunderstand With 3D Animation";
  const text = "Whether you are launching hardware, raising a round or trying to shorten a technical sales cycle, we start with the engineering reality and build the story on top of it. Send a spec sheet, a CAD file or a photograph of the prototype on a bench.";

  return (
    <GlobalGreatVideosSection
      title={title}
      text={text}
      ctaText="Get A Free Quote"
    />
  );
};

export default GreatVideosSection;