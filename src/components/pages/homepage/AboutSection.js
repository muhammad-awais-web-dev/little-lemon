import React from 'react';
import styles from './AboutSection.module.css'; // Using CSS Modules


const chefA = process.env.PUBLIC_URL + '/images/Chef(1).webp';
const chefB = process.env.PUBLIC_URL + '/images/Chef(2).webp';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>LITTLE LEMON</h1>
        <h2 className={styles.subtitle}>Chicago</h2>
        <p className={styles.description}>
          We are a family-owned Mediterranean restaurant, rooted in tradition and
          inspired by innovation. Our dishes celebrate classic recipes passed
          down through generations, while adding a fresh, modern twist to create
          a dining experience that feels both authentic and new.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={chefB}
          alt="Chef in the kitchen"
          className={`${styles.image} ${styles.imageTwo}`}
        />
        <img
          src={chefA}
          alt="Chef preparing a salad"
          className={`${styles.image} ${styles.imageOne}`}
        />
      </div>
    </section>
  );
};

export default AboutSection;