"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  { question: "How much does an Explainer Video Agency charge?", answer: "Most professional explainer video work sits between $2,500 and $5,000 for a sixty second animated explainer using library assets and a standard voice over. Custom illustration, character rigs, 3D product work or live action push the range toward $7,000 per minute. Price follows three things: script complexity, illustration load and animation length. We quote each separately so you can see exactly what you are paying for." },
  { question: "Do you specialise in SaaS and product explainer videos?", answer: "It is our largest service line. Roughly half of what we ship is SaaS: launch films, feature explainers, app demos and in product onboarding. That said, we produce the full explainer range, so if your product is physical or your audience is clinical, the same team handles it." },
  { question: "What types of explainer videos do you produce?", answer: "SaaS and product explainers, 2D animation, 3D explainers, whiteboard, motion graphics, app demos, onboarding tours, character animation, live action hybrids, sales films and internal training content." },
  { question: "What does your explainer video process look like?", answer: "Five stages: discovery and script, storyboard and style frames, voice over and illustration, animation and sound design, then review and delivery. You approve each stage before the next begins, which is why our projects rarely need a rebuild." },
  { question: "How long does an explainer video take?", answer: "A sixty to ninety second animated explainer usually runs four to six weeks. 3D, character heavy or live action work runs six to ten weeks. Rush schedules are possible when the script is locked early." },
  { question: "Can I hire your explainer video studio on a retainer?", answer: "Yes. Many SaaS clients start with a launch film and move to a monthly retainer once the pipeline proves itself. You get a dedicated writer, reserved production capacity and a predictable monthly output." },
  { question: "What do you need from me before we start?", answer: "Brand guidelines, product access or a recorded walkthrough, any reference films you admire, and a clear answer to one question: what should the viewer do after watching?" },
];

export default function FaqSection() {
  return <GlobalFaqSection heading="Frequently Asked Questions About Explainer Video Agency" faqs={faqs} />;
}
