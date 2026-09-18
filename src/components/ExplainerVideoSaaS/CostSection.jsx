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
              <h2 className={styles.title}>How Much Does A SaaS Explainer Video Cost?</h2>
              <p className={styles.description}>
                Flat rate, agreed before animation starts, with no hidden line items. A 60 to 90 second positioning explainer with custom vector scenes, a professional native voiceover, licensed music and sound design runs $2,500 to $4,500. Most of our work sits in the $5,000 to $9,000 band, which covers longer product tours, animated interface sequences built from your real workflows, character work and multi format delivery. Onboarding series, feature launch libraries and multi language rollouts run $10,000 to $20,000, and are priced as a programme rather than a single film because the style system gets built once and reused.
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
                src="https://player.vimeo.com/video/1065200259?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
