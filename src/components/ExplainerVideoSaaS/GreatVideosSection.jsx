"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = "Turn Trial Users Into Paying Customers With A SaaS Explainer Video";
  const text = "Whether you are relaunching a homepage that is not converting, fixing an onboarding flow that leaks, or shipping a feature nobody has noticed yet, we start with the message and work outward. Strategy, script, UI design and animation from one team, with a producer who is still on the project in week six.";

  return (
    <GlobalGreatVideosSection
      title={title}
      text={text}
      ctaText="Get A Free Quote"
    />
  );
};

export default GreatVideosSection;
