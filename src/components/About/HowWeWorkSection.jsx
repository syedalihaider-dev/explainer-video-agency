"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: 'Team Structure',
    content: 'You get one creative director, one producer and a crew sized to your scope. The director owns the creative call, the producer owns the calendar, and you never have to guess who to message.'
  },
  {
    id: 2,
    title: 'Operating Rhythm',
    content: 'A predictable cadence removes emotion from crisis management. Fixed checkpoints, a weekly written update and a shared milestone board mean decisions get made on evidence rather than urgency, and the team stays empowered to act without waiting on a signature.'
  },
  {
    id: 3,
    title: 'Feedback And Revisions',
    content: 'Comments are collected on a review platform, timestamped against the frame in question and consolidated into one action list per round. Two full rounds are included at every stage as standard.'
  },
  {
    id: 4,
    title: 'Security And Confidentiality',
    content: 'NDA before brief. Product access and assets live in access controlled storage, and unreleased work is quarantined from our public reel until you clear it.'
  },
  {
    id: 5,
    title: 'Tools And Pipeline',
    content: 'Illustrator, After Effects, Cinema 4D, Blender, Figma and Frame.io, running into a managed render and review pipeline. You receive source files in formats your future team can actually open.'
  }
];

const HowWeWorkSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.howWeWorkSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className={styles.leftContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className={styles.heading}>How We Work</h2>
              <p className={styles.description}>
                We will always search for the best way to give our clients a great experience. We keep learning every industry we enter so we can offer work at a standard that holds up on a full screen, not just in a thumbnail.
              </p>
              <div className={styles.buttonsWrapper}>
                <CTAButton type="chat" text="Let Us Talk" />
                <CTAButton type="link" href="tel:+1-443-487-0213" text="Call Now" variant="outline" />
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <div className={styles.accordionList}>
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    className={styles.accordionItem}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className={styles.accordionTitle}>{item.title}</h3>
                      <span className={styles.accordionIcon}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className={styles.accordionContentWrapper}
                        >
                          <div className={styles.accordionContent}>
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
