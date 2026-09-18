"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "How much does a 2D explainer video cost?",
    answer: "Most custom 2D explainer videos land between $1,500 and $7,000 per finished minute. Detailed character animation and broadcast level production can reach $15,000 per minute. The three variables are runtime, illustration and animation complexity, and turnaround speed. We quote each element separately so you can see what you are paying for and remove anything that is not earning its place.",
  },
  {
    question: "How long does a 2D explainer video take?",
    answer: "Four to six weeks from kickoff to final files is standard: one week of discovery and script, one to two weeks of storyboard and styleframes, two weeks of animation and voiceover, and a final week of sound design and revisions. An expedited two to three week track is available. The biggest cause of delay is not animation, it is slow internal approval on the script, so we agree named approvers in week one.",
  },
  {
    question: "How do I choose the best 2D explainer video studio?",
    answer: "Ask to see a script before you look at a showreel. Any studio can cut a reel from its three best frames. Then ask how many revision rounds are included and at which stage, who owns the source files, whether the person pitching you is the person animating, and for one example where the studio talked a client out of the format they asked for. A studio that only ever agrees with the brief is selling production, not judgement.",
  },
  {
    question: "What should I avoid when hiring a 2D animation studio?",
    answer: "Three things. A quote with no itemisation, because it usually hides where the corners will be cut. A process that starts at storyboard rather than script, because it means nobody is accountable for the message. And a portfolio where every film looks identical, which tells you the studio applies one aesthetic to every brief rather than adapting to yours.",
  },
  {
    question: "How do 2D and 3D explainer videos compare on cost and performance?",
    answer: "2D is faster and cheaper, roughly $1,500 to $7,000 per minute over four to six weeks, against $5,000 to $25,000 and more per minute over eight to twelve weeks for 3D. Performance depends on what is being sold. 2D wins when the product is software, a service or a process. 3D earns its cost when a buyer needs to see material, scale or the inside of a physical object.",
  },
  {
    question: "Can a 2D explainer video actually improve landing page conversion?",
    answer: "Yes, when it replaces the job a wall of feature copy was failing to do. Reported lifts sit between 20 and 80 percent depending on the starting conversion rate, the traffic quality and the placement. The gains come from three mechanics: the value proposition lands before the visitor scrolls, dwell time rises, and more people reach the call to action. Run it as a split test and we will help you set the test up.",
  },
  {
    question: "Who owns the video, the artwork and the source files?",
    answer: "You do, in full, from the moment the final invoice clears. That covers the finished film, the character designs, the vector artwork, the voiceover licence for the agreed usage and the project source files. No recurring licence fees and no restriction on running it as a paid ad, embedding it on a landing page or handing it to another vendor later.",
  },
  {
    question: "Our interface changes often. Will the video go out of date?",
    answer: "This is why we build interface scenes as vector mockups rather than screen recordings. A recording is dead the day your product team ships a redesign. A vector build lets us open the affected scenes, update what changed and re export, usually in days and at a fraction of a new production. We keep project files archived so an update in year two does not start from scratch.",
  },
  {
    question: "Do we need to write the script, or does your team handle it?",
    answer: "Our writers handle it end to end. They study the product, the buyer and the competitive claim, then write a script built to earn the first five seconds and drive one action. If you already have an internal draft we will edit it for voiceover rather than start again, because internal drafts usually contain the one honest sentence the marketing site has been avoiding.",
  },
  {
    question: "How do we know whether the video worked?",
    answer: "Agree the measure before production starts. For a homepage placement that is usually conversion rate on the page and scroll depth. For sales enablement it is reply rate or meeting to opportunity rate. For onboarding it is activation and support ticket volume. We ask for the baseline in week one and check in at 30 and 90 days after launch.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions About 2D Explainer Videos"
      faqs={faqs}
    />
  );
}
