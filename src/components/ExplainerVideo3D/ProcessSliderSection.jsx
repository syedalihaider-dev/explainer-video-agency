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
    title: "Technical Discovery And CAD Audit",
    text: "We sit with your engineering and product teams and audit what exists: CAD assemblies, spec sheets, patent drawings, existing renders. We establish what can be shown publicly and what cannot, which matters when patents are pending. We also agree on the single friction point in the sales conversation that the film has to resolve."
  },
  {
    id: 2,
    image: "/discover-and-plan.png",
    step: "2",
    title: "Scripting And Message Strategy",
    text: "A writer builds the script around that friction point rather than around a feature tour, timed to runtime. For regulated categories the script goes through your compliance reviewer here, before animation begins, because a claim that fails review after final render is an expensive rebuild."
  },
  {
    id: 3,
    image: "/discover-and-plan.png",
    step: "3",
    title: "Storyboarding, Camera Language And Styleframes",
    text: "The script becomes a shot by shot board with camera moves specified, plus two or three fully rendered styleframes so you approve the look on stills. Your technical lead signs off on accuracy here: sequence of operation, component relationships, anything that would make an engineer wince. This is the cheapest point in the project to be wrong."
  },
  {
    id: 4,
    image: "/discover-and-plan.png",
    step: "4",
    title: "Modelling, Texturing And Lookdev",
    text: "CAD geometry is converted and optimised for animation, or modelled from scratch where no CAD exists. Surfaces get real world materials through PBR texturing, so brushed aluminium behaves like brushed aluminium and medical polymers read as medical polymers. Lookdev locks lighting and materials across the film so twelve matches are shot at once."
  },
  {
    id: 5,
    image: "/discover-and-plan.png",
    step: "5",
    title: "Animation, Simulation And Lighting",
    text: "Cameras, mechanisms and assemblies are animated, and any physics work is simulated and cached. Lighting is built like a photography set rather than left to default, which is most of the difference between a render that looks expensive and one that looks like a stock asset. You review at a rough animation stage with scratch audio."
  },
  {
    id: 6,
    image: "/discover-and-plan.png",
    step: "6",
    title: "Rendering, Compositing And Delivery",
    text: "Final frames render on the farm, then get composited: colour grade, depth of field, glows, motion blur and any interface overlays. Voiceover, sound design and mix follow. You receive 4K and 1080p masters, a web optimised MP4, a silent captioned cut, an SRT file, print resolution still frames and any aspect ratio variants in scope."
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
          Our Proven 3D Explainer Video Workflow
        </motion.h2>
        <p className={styles.description}>
          Six milestones across eight to twelve weeks, each approved before the next begins. This discipline is not administrative, it is financial: a change at storyboard costs hours, the same change after final render costs a re render.
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
