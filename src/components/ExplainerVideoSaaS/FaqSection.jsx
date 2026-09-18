"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does a SaaS explainer video cost?",
    answer: "A 60 to 90 second positioning explainer runs $2,500 to $4,500. Longer product tours with animated interface sequences, character work and multi format delivery sit in the $5,000 to $9,000 band, which is where most of our SaaS work lands. Onboarding series and feature launch programmes run $10,000 to $20,000 and are priced as a programme because the style system is built once and reused. Pricing is flat rate and agreed before animation starts.",
  },
  {
    question: "What is the timeline for SaaS video production?",
    answer: "Four to six weeks from kickoff to final files: one week of discovery and script, one to two weeks of storyboard, UI design and styleframes, two weeks of animation and voiceover, and a final week of sound design and revisions. The most common cause of delay is not animation, it is a script waiting on three internal approvers. We agree who signs off in week one.",
  },
  {
    question: "What is the difference between a SaaS explainer video and a product demo video?",
    answer: "An explainer frames the problem and the outcome for someone who does not yet know what you do. It is a top of funnel asset for the homepage, ads and social, and it is measured in signups and demo requests. A demo shows the product doing the job for someone already interested, sits on pricing and feature pages, and is measured in trial to paid conversion and sales cycle length. A walkthrough is different again: it teaches one task, lives in onboarding and the help centre, and is measured in activation and support ticket volume.",
  },
  {
    question: "How many videos does a SaaS company actually need?",
    answer: "Usually one to start and three within the year. Start with the positioning explainer, because every other asset borrows its language. Add a product tour once the traffic is converting but the trials are not. Add onboarding or walkthrough content once you can see where activation is dropping. We would rather sell you one good film now than three mediocre ones at once, and we will say so on the call.",
  },
  {
    question: "Our product has a lot of features. How do you decide what goes in?",
    answer: "By deciding what the video is for, then cutting everything that does not serve it. A 90 second film supports roughly one core idea and two supporting points. Most of the value we add is in that argument, and it usually happens in week one with your product marketing lead. If a feature is not in the video, that is a positioning decision rather than an oversight, and we will explain the reasoning in writing.",
  },
  {
    question: "Do we need to write the script or provide visual assets?",
    answer: "No. Our writers and creative directors handle scripting, messaging architecture and visual design from scratch. All we need is a briefing session, access to the product and any brand guidelines you have. If you already have an internal draft we will edit it for voiceover rather than start again, because internal drafts usually contain the one honest sentence the marketing site has been avoiding.",
  },
  {
    question: "How do you handle UI updates during or after production?",
    answer: "Interface scenes are built as modular vector artwork rather than screen recordings, which is the single most important production decision on a SaaS project. A recording is obsolete the day your product team ships a redesign. With a vector build we open the affected scenes, update what changed and re-render only those, usually in days rather than quoting a new production. We keep your project files archived so an update in year two does not start from scratch.",
  },
  {
    question: "Where should we place the video for maximum conversion?",
    answer: "Above the fold on the homepage is the highest leverage placement in almost every case, followed by the pricing page and paid social. Embed it in trial signup confirmation emails and in cold outbound, where it lifts reply rates. Whatever you do, do not bury it on an About page. Run it as a split test against your current hero so you have a real number rather than an opinion.",
  },
  {
    question: "Do you make SaaS onboarding videos for retention as well?",
    answer: "Yes, and it is often the higher return project. Top of the funnel video gets people in the door. Onboarding and activation video keeps them, by getting a new user to their first real outcome before the trial clock runs out. Teams typically see it in activation rate, time to value and support ticket volume rather than in signups.",
  },
  {
    question: "How do we measure whether the video worked?",
    answer: "Agree the metric before production starts and capture the baseline in week one. Homepage positioning film: conversion rate on the page, scroll depth and bounce. Product tour: trial to paid and sales cycle length. Onboarding: activation rate and ticket volume. We check in at 30 and 90 days after launch. A studio that never asks what happened after delivery is not accountable for anything beyond the export.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About SaaS Explainer Videos"
      faqs={faqs}
    />
  );
}
