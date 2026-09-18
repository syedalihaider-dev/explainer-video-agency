"use client";
import React from "react";
import GlobalWhyPartnerSection from "../Common/WhyPartnerSection";

const cardsData = [
  {
    id: 1,
    icon: "/chess.png",
    title: "Engineering Accuracy First",
    text: "We work from CAD data and verify motion, tolerances and sequence with your technical lead at storyboard stage. A beautiful render of a mechanism that moves wrong gets rejected internally, and rightly so.",
    rotate: -6,
    yOffset: 0
  },
  {
    id: 2,
    icon: "/calender.png",
    title: "Milestone Approval, No Surprises",
    text: "Script, storyboard, styleframes, rough animation, final render. Each one approved before the next begins, because on a 3D project a late change means re rendering every affected shot.",
    rotate: -2,
    yOffset: 20
  },
  {
    id: 3,
    icon: "/ruling-conversion.png",
    title: "Assets That Outlive The Film",
    text: "You own the models, textures and scene files outright. That geometry becomes product page stills, spec sheet imagery and trade show loops for years without another modelling bill.",
    rotate: 3,
    yOffset: 10
  }
];

export default function WhyPartnerSection() {
  return (
    <GlobalWhyPartnerSection
      heading="Why Choose Our 3D Explainer Video Company?"
      description="At this price point you are buying judgement as much as rendering. Here is what separates a film your engineering team signs off from an expensive render they send back."
      cardsData={cardsData}
      variant="gradient"
    />
  );
}
