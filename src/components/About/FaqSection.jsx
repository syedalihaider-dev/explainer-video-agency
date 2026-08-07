"use client";

import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What makes you different from other explainer video agencies?",
    answer: "Two things. We refuse to illustrate before the message is agreed, and we run one accountable creative director per project instead of passing your brief between departments. It makes the first week slower and the final month far faster.",
  },
  {
    question: "Is your team focused only on SaaS explainer videos?",
    answer: "SaaS and product work is our largest line, and that discipline shows up everywhere else. We produce explainers for healthcare, fintech, manufacturing, property and education using the same writing standard.",
  },
  {
    question: "Where is your team based?",
    answer: "We operate as a distributed explainer video studio with production leadership in the United States and craft teams across several time zones, which is how work continues while you sleep and lands in your inbox by morning.",
  },
  {
    question: "Can I hire your studio for ongoing content rather than one film?",
    answer: "Yes. Monthly retainers give you a dedicated writer, reserved animation capacity and a content calendar planned a quarter ahead.",
  },
  {
    question: "Do you work with agencies as a white label partner?",
    answer: "Regularly. We can stay entirely invisible, deliver under your brand and join client calls as your video department when that helps you win the pitch.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About Explainer Video Agency"
      faqs={faqs}
    />
  );
}
