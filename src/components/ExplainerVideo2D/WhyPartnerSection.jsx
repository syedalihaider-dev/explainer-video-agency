"use client";
import React from "react";
import GlobalWhyPartnerSection from "../Common/WhyPartnerSection";

const cardsData = [
  {
    id: 1,
    icon: "/chess.png",
    title: "Script First, Always",
    text: "Most weak explainers are writing failures, not animation failures. We open every project with a message audit and refuse to storyboard until one idea is agreed. That is why our films get approved fast and rarely get rebuilt.",
    rotate: -6,
    yOffset: 0
  },
  {
    id: 2,
    icon: "/calender.png",
    title: "Deadlines In Writing",
    text: "Standard 60 to 90 second explainers ship in four to six weeks from kickoff. Scope, milestones and delivery dates are agreed before we start, and if a date is at risk you hear it from us first with a plan attached.",
    rotate: -2,
    yOffset: 20
  },
  {
    id: 3,
    icon: "/ruling-conversion.png",
    title: "Built For Reuse",
    text: "You are not buying one film. You are buying a vector asset system that produces paid social cuts, a silent captioned version, vertical edits and still frames, then updates cheaply when your product changes.",
    rotate: 3,
    yOffset: 10
  }
];

export default function WhyPartnerSection() {
  return (
    <GlobalWhyPartnerSection
      heading="Why Choose Our 2D Explainer Video Studio?"
      description="Choosing a studio is a trust decision. You are handing over your brief, your budget and a deadline with downstream consequences. Here is what actually makes the difference."
      cardsData={cardsData}
      variant="gradient"
    />
  );
}
