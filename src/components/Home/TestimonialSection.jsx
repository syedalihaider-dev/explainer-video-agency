"use client";
import React from "react";
import GlobalTestimonialSection from "../Common/TestimonialSection";

const testimonials = [
  { id: 1, name: "Amelie", role: "VP Marketing", content: "Our product needed four slides to explain. Explainer Video Agency did it in seventy seconds and our demo requests moved that month.", image: "https://img.youtube.com/vi/h5GIeQy4NNs/hqdefault.jpg", video: "https://www.youtube.com/embed/h5GIeQy4NNs?autoplay=1" },
  { id: 2, name: "Sarah", role: "Director of Operations", content: "The script stage planned by Explainer Video Agency and their explainer video saved us. Every argument we would have had at animation was settled on a page.", image: "https://img.youtube.com/vi/JArjcxkPDzI/hqdefault.jpg", video: "https://www.youtube.com/embed/JArjcxkPDzI?autoplay=1" },
  { id: 3, name: "Michael", role: "CEO and Founder", content: "We have used three explainer video agencies. This is the first one that understood the product before the kickoff call ended and delivered outstanding results.", image: "https://img.youtube.com/vi/kbctprXL7FQ/hqdefault.jpg", video: "https://www.youtube.com/embed/kbctprXL7FQ?autoplay=1" },
];

export default function TestimonialSection() {
  return (
    <GlobalTestimonialSection
      heading="Let Us See What Our Clients Are Saying"
      subText="A few of the teams who handed us a difficult product and a nervous launch date."
      testimonials={testimonials}
      variant="default"
    />
  );
}
