"use client";
import React from 'react';
import styles from '../Animation2D/CostSection.module.css';
import { motion } from 'framer-motion';

const CostSection = () => {
  return (
    <section className={styles.costSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">TRANSPARENT PRICING</p>
              <h2 className={styles.title}>How Much Does A 2D Explainer Video Cost?</h2>
              <p className={styles.description}>
                A professionally produced 60 second 2D explainer video from an established studio typically starts in the $1,500 to $3,000 per finished minute range. That covers discovery, scripting, storyboarding, vector scenes and custom icons, a professional native voiceover, licensed music, sound design and delivery in the formats you need. Custom illustrations drawn to your brand, animated interface sequences and multiple characters move a project into the $3,000 to $7,000 band, which is where most of our B2B landing page and investor pitch work sits. Advanced character rigging, frame by frame motion and original score run from $7,000 to $15,000.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              className={styles.videoWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSection;
