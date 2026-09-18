"use client";
import React from "react";
import GlobalWhyPartnerSection from "../Common/WhyPartnerSection";

const cardsData = [
  {
    id: 1,
    icon: "/chess.png",
    title: "Product Marketers, Not Ad Writers",
    text: "Our writers have sat in positioning workshops and written release notes. They know the difference between a benefit and a feature dressed as one, and they will push back on the claim your homepage cannot support.",
    rotate: -6,
    yOffset: 0
  },
  {
    id: 2,
    icon: "/calender.png",
    title: "Vector UI, Never Screen Recordings",
    text: "Your interface is rebuilt as modular vector artwork. When the dashboard changes we re render the affected scenes instead of the whole film. A screen recording is obsolete the day your product team ships.",
    rotate: -2,
    yOffset: 20
  },
  {
    id: 3,
    icon: "/ruling-conversion.png",
    title: "Four To Six Weeks, In Writing",
    text: "Scope, milestones and delivery dates agreed before kickoff. If a launch date is at risk you hear it from us first, with a plan attached rather than an apology.",
    rotate: 3,
    yOffset: 10
  }
];

export default function WhyPartnerSection() {
  return (
    <GlobalWhyPartnerSection
      heading="Why Choose Our SaaS Explainer Video Company?"
      description="Most video studios treat software like any other client and it shows in the first draft. Here is what changes when the team has actually shipped product marketing."
      cardsData={cardsData}
      variant="gradient"
    />
  );
}
