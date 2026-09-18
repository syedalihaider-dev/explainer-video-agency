"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does a 3D explainer video cost per minute?",
    answer: "Between $5,000 and $25,000 per finished minute in most cases. The range is wide because the work behind it varies enormously: a single clean product with rigid geometry sits at the bottom, while fluid simulation, molecular scenes, multi component assemblies and 4K ray traced output sit at the top. The largest single factor you control is the quality of the source files you hand over.",
  },
  {
    question: "Why does 3D cost more than a 2D explainer video?",
    answer: "Because you are paying for geometry, not illustration. A 2D scene is drawn once and animated. A 3D scene has to be modelled in three dimensions, given physically accurate materials, lit like a real set, animated, simulated where physics is involved, and then rendered frame by frame on GPU hardware. A sixty second film is roughly 1,500 frames, each computed individually. That compute time is real money.",
  },
  {
    question: "How long does 3D explainer video production take?",
    answer: "Eight to twelve weeks is standard: two weeks of discovery and script, one week of storyboard and styleframes, three weeks of modelling and lookdev, three weeks of animation and lighting, and a final stretch for rendering, sound and delivery. Expedited tracks are possible when the CAD is clean and the approval chain is short, but rendering is a hard floor that budget alone does not remove.",
  },
  {
    question: "Can you work from our existing CAD files?",
    answer: "Yes, and it is the fastest and most accurate way to start. We work with STEP, IGES, OBJ, FBX, STL and native files from SolidWorks and similar packages. Production CAD is usually too heavy to animate directly, so we retopologize and optimise it for rendering while holding dimensional accuracy. If you have no CAD we model from drawings, photographs and measurements, which adds one to two weeks.",
  },
  {
    question: "When should we choose 3D over a 2D explainer video?",
    answer: "Choose 3D when the product has physical form, internal mechanics, spatial relationships or a premium aesthetic that has to be felt: medical devices, robotics, industrial machinery, consumer hardware, semiconductors. Choose 2D when the product is a digital workflow, a service or an abstract concept. We say this on the first call even when it means a smaller project, because a 3D film about a software dashboard is money spent on the wrong problem.",
  },
  {
    question: "Do we need a physical prototype before you start?",
    answer: "No. Most of our clients come to us before manufacturing is complete, which is exactly when the video is most useful. If the geometry exists as engineering data, we can build and film it. Teams routinely use the finished animation to open preorders, raise funding and book trade show meetings months before the first unit ships.",
  },
  {
    question: "How do you keep the animation technically accurate?",
    answer: "Accuracy is verified at storyboard stage with your engineering lead, before any modelling budget is spent. We agree on the sequence of operation, the component relationships and anything that must not be shown for patent or regulatory reasons. For medical and regulated categories the script also goes through your compliance reviewer before animation begins.",
  },
  {
    question: "Who owns the 3D models and the source files afterwards?",
    answer: "You do, in full, once the final invoice clears. That covers the film, the 3D models, textures, scene files and any still frames rendered from them, with no recurring licence and no usage restriction. Keep those assets. The geometry you paid to build once can produce product page imagery, spec sheet renders, trade show loops and ad cuts for years without another modelling bill.",
  },
  {
    question: "How do revisions work on a 3D project?",
    answer: "Through milestone approval: script, then storyboard and styleframes, then rough animation, then final render. Changes are free and instant at script stage, cheap at storyboard, moderate at rough animation and expensive after final render, because altered shots have to be rendered again. We are explicit about which door you are walking through at each stage, and we will tell you when a change is going to cost more than it is worth.",
  },
  {
    question: "How do we measure whether the video worked?",
    answer: "Agree the metric before production starts. For a product launch it is usually preorders, demo requests or qualified pipeline created in the ninety days after release. For sales enablement it is deal velocity and the stage where deals previously stalled. For trade shows it is booth dwell time and scanned leads. We ask for the baseline in week one and check in at 30 and 90 days after launch.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About 3D Explainer Videos"
      faqs={faqs}
    />
  );
}
