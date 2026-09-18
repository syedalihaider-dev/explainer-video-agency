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
    title: "Discovery And Message Planning",
    text: "We get clear on what the piece has to do before anyone opens a design file. Who is it for, what stage are they at, where is the current message losing people, and what is the one action the film drives toward. We ask for product access, your positioning doc if one exists, and ideally a recorded sales call where a prospect got confused. That recording is usually worth more than the brief."
  },
  {
    id: 2,
    image: "/discover-and-plan.png",
    step: "2",
    title: "Script And Messaging Architecture",
    text: "A writer builds the script as a problem and outcome arc, timed at roughly 150 words per minute, and makes the hard call about which two features survive and which eight do not. You get it in a commentable document with voiceover on the left and the intended visual on the right, so you are approving the film rather than reading prose. Script revisions are unlimited here because this is where they are free."
  },
  {
    id: 3,
    image: "/discover-and-plan.png",
    step: "3",
    title: "Storyboard, UI Design And Styleframes",
    text: "The approved script becomes frame by frame visuals plus two or three fully designed styleframes drawn against your product, your palette and your type. Interface scenes are designed here as simplified vector mockups, keeping what the story needs and dropping the chrome that would distract. An animatic with scratch voiceover goes out alongside so you can feel the pacing before animation starts."
  },
  {
    id: 4,
    image: "/discover-and-plan.png",
    step: "4",
    title: "Animation Development",
    text: "Animators build the film in After Effects from Illustrator assets: UI transitions, data movement, kinetic type and any character work, all cut to the approved voiceover rather than laid over afterwards. You review at a rough animation stage before anything goes to final quality."
  },
  {
    id: 5,
    image: "/discover-and-plan.png",
    step: "5",
    title: "Refinements And Sound Design",
    text: "A native voice artist records the final narration from a shortlist you choose. Sound design, music and the final mix follow, then a consolidated revision round. Feedback is collected at fixed checkpoints and timestamped, so there is no version confusion and no surprise invoice for changes you already asked for."
  },
  {
    id: 6,
    image: "/discover-and-plan.png",
    step: "6",
    title: "Final Review, Delivery And Handover",
    text: "A technical check against your delivery specs, then handover. You receive the master in 1080p and 4K, a web optimised MP4 sized for a homepage embed, a silent captioned cut for LinkedIn, an SRT file, vertical 9:16 variants and still frames. Source files on request, and you own all of it outright once the final invoice clears."
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
          Our Proven SaaS Video Production Workflow
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
