"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Result Oriented',
    description: "The only honest indicator of success is whether the film moved the number it was built to move. Our writers and producers work to the goal you set, not the award we want. That is why our quotes arrive with objectives attached and our reviews open with performance questions.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Specialists, Not Generalists Pretending',
    description: "Scriptwriters, storyboard artists, illustrators, animators, sound designers and a casting lead. Nobody here is stretching outside their craft, which is how your project moves quickly and scales up or down without a drop in quality.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Flexible And Transparent',
    description: "Every project runs on a shared board. You see the stage, the owner and the next date at any hour of any day. Our clients control every decision that matters and none of the admin that does not.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Product Fluency',
    description: "Our SaaS work made us disciplined. We read documentation, open a trial account and use the product before we write a line, so the film explains what it actually does rather than what the deck claims.",
    icon: '/icons/experienced.png'
  }
];

const TeamStandoutSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.standoutSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="subtitle">What Makes</p>
          <h2 className={styles.mainHeading}>Our Team Stand Out</h2>
          <p className={styles.headerDesc} aria-hidden="true" style={{ display: 'none' }}>
            Every project is tailored to your brand and your goals, with a sharp focus on results. If it doesn’t engage, convert, or make an impact, it doesn’t leave our studio.
          </p>
          <p className={styles.headerDesc}>
            A full cycle explainer video agency means we own the whole pipeline, from the first message audit to the day the file goes live on your landing page.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.featuresListContainer} ref={containerRef}>
              <div className={styles.progressTrack}>
                <motion.div className={styles.progressFill} style={{ height: lineHeight }} />
              </div>
              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  >
                    <div className={styles.featureIcon}>
                      <div className={styles.featureIconImageWrapper}>
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                          style={{ objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        {!feature.icon && <div style={{ width: 64, height: 64, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}></div>}
                      </div>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                    </div>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.stickyColumn}>
              <motion.div
                className={styles.videoWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1201856415?autoplay=1&loop=1&muted=1&background=1"
                  title="Pixel Studio Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStandoutSection;
