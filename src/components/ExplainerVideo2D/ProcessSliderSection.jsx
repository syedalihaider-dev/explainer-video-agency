"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../Home/ProcessSliderSection.module.css";
import CTAButton from "../Common/CTAButton";

const slides = [
  {
    id: 1,
    image: "/discover-and-plan.png",
    step: "1",
    title: "Discovery And Creative Brief",
    text: "We establish the audience, the objective, the brand voice, the competitive context and the distribution channels before any creative work begins. You give us access to the product and, if you have it, the sales call recording where prospects get confused. We come back with the single idea the film will carry and the one action it drives toward. Vague briefs produce vague videos, so we do not accept them."
  },
  {
    id: 2,
    image: "/discover-and-plan.png",
    step: "2",
    title: "Conversion Copywriting",
    text: "A writer who has worked inside product marketing drafts the script as a problem and solution arc, timed to your target runtime at roughly 150 words per minute. You receive it in a commentable document with voiceover on the left and the intended visual on the right, so you are approving the film rather than reading prose. Script revisions are unlimited here because this is where they are free."
  },
  {
    id: 3,
    image: "/discover-and-plan.png",
    step: "3",
    title: "Storyboarding And Design",
    text: "The approved script becomes frame by frame visuals plus two or three fully designed styleframes drawn against your colour palette, type and interface. You are choosing the look of the finished film on stills, before any animation budget is spent. An animatic with scratch voiceover goes out alongside the boards so you can feel the pacing."
  },
  {
    id: 4,
    image: "/discover-and-plan.png",
    step: "4",
    title: "Animation Development",
    text: "Animators build the film in After Effects from Illustrator assets: interface animation, character motion, kinetic type and transitions, all cut to the approved voiceover track rather than laid over it afterwards. You review at a rough animation stage before anything goes to final quality."
  },
  {
    id: 5,
    image: "/discover-and-plan.png",
    step: "5",
    title: "Refinements And Sound Design",
    text: "A native voice artist records the final narration from a shortlist you choose. Sound design, music and the final mix follow, then the consolidated revision round. Feedback is gathered at fixed checkpoints and timestamped, so there is no version confusion and no surprise invoice for changes you already asked for."
  },
  {
    id: 6,
    image: "/discover-and-plan.png",
    step: "6",
    title: "Final Review, Delivery And Handover",
    text: "A technical quality check against your delivery specs, then handover. You receive the master in 1080p and 4K, a web optimised MP4, a silent captioned cut, an SRT file, still frames and any aspect ratio variants in scope. Source files are handed over on request, and you own all of it outright once the final invoice clears."
  }
];

export default function ProcessSliderSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = Math.abs(page % slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    setProgress(0);
  };

  const handleDotClick = (index) => {
    const newDirection = index > activeIndex ? 1 : -1;
    setPage([page + (index - activeIndex), newDirection]);
    setProgress(0);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            paginate(1);
            return 0;
          }
          return prev + (100 / (5000 / 50));
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHovered, page]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className={styles.processSliderSection}>
      <div className="container">
        <p className="subtitle" style={{ textAlign: "center", marginBottom: "15px" }}>HOW WE WORK</p>
        <motion.h2
          className={styles.mainHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Proven 2D Explainer Video Workflow
        </motion.h2>
        <p className={styles.description}>
          Six milestones, each signed off before the next begins. The sequence exists to make feedback cheap: every change is made at the stage where it costs hours instead of weeks.
        </p>

        <div className={styles.sliderContainer} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.slideWrapper}
              >
                <div className={styles.leftCol}>
                  <Image
                    width={760}
                    height={533}
                    src={slides[activeIndex].image}
                    alt={slides[activeIndex].title}
                    className={styles.slideImg}
                  />
                </div>
                <div className={styles.rightCol}>
                  <div className={styles.stepCircle}>{slides[activeIndex].step}</div>
                  <h3 className={styles.slideTitle}>{slides[activeIndex].title}</h3>
                  <p className={`${styles.slideText} scroll_block`}>{slides[activeIndex].text}</p>

                  <div className={styles.btnGroup}>
                    <CTAButton text="Let's Start" variant="filled" />
                    <CTAButton text="Let's Talk" variant="outline" className={styles.btn} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <div className={styles.arrowContainer}>
              <button
                className={styles.arrow}
                onClick={() => paginate(-1)}
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className={styles.arrow}
                onClick={() => paginate(1)}
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
