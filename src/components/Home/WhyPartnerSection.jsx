"use client";
import React from "react";
import GlobalWhyPartnerSection from "../Common/WhyPartnerSection";

const cardsData = [
  { id: 1, icon: "/chess.png", title: "The Script Is The Product", text: "Most weak explainers are not animation failures, they are writing failures. We open every project with a message audit and refuse to storyboard until one idea is agreed. It is why our films get approved fast and rarely get rebuilt.", rotate: -6, yOffset: 0 },
  { id: 2, icon: "/wall.png", title: "We Speak Fluent SaaS", text: "Activation, trial to paid, ICP, feature parity, churn. Our writers have shipped inside product marketing teams, so you spend review calls sharpening the story rather than teaching us the category.", rotate: -2, yOffset: 20 },
  { id: 3, icon: "/calender.png", title: "Timelines We Put In Writing", text: "Scope, milestones and delivery dates are agreed before kickoff. If a date is at risk you hear it from us first, with a plan attached.", rotate: 3, yOffset: 10 },
  { id: 4, icon: "/ruling-conversion.png", title: "A Collaborative Revision Process", text: "Feedback is gathered at fixed checkpoints, timestamped and consolidated. No stray comments, no version confusion, no surprise invoices for changes you already asked for.", rotate: 7, yOffset: 30 },
];

export default function WhyPartnerSection() {
  return <GlobalWhyPartnerSection heading="Why Clients Choose Our Explainer Video Studio And Then Stay" cardsData={cardsData} variant="default" />;
}
