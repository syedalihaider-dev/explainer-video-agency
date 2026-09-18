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
              <h2 className={styles.title}>How Much Does A 3D Explainer Video Cost?</h2>
              <p className={styles.description}>
                3D pricing looks opaque from the outside because the labour is invisible. A single product with clean geometry, standard materials and studio lighting typically starts in the $5,000 to $10,000 per finished minute range. Medical devices, multi component assemblies and launch films that need full lookdev, exploded sequences and an environment build sit in the $10,000 to $18,000 band, which is where most of our work lands. Fluid, particle, thermal or molecular simulation runs from $18,000 to $25,000 and above.
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
