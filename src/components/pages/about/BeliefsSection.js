import React from 'react';
import styles from './BeliefsSection.module.css'; // Import our scoped styles

// Data for our belief cards
const beliefsData = [
  {
    iconClass: 'fa-solid fa-award', // Font Awesome class for the quality icon
    title: 'Quality First',
    description: 'fresh, seasonal produce sourced from trusted suppliers.',
  },
  {
    iconClass: 'fa-regular fa-clock', // Font Awesome class for the time icon
    title: 'Thoughtful cooking',
    description: 'recipes treated with respect, updated where it matters for flavour and balance.',
  },
  {
    iconClass: 'fa-solid fa-recycle', // Font Awesome class for the sustainability icon
    title: 'Sustainability',
    description: 'minimal waste, reusable packaging where possible, and a focus on local ingredients.',
  },
];


// Inner Card Component (Not exported)
const BeliefCard = ({ iconClass, title, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <i className={iconClass}></i>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
};


// Main Beliefs Section Component
const BeliefsSection = () => {
  return (
    <section className={styles.beliefsSection}>
      <h2 className={styles.title}>What We Believe</h2>
      <div className={styles.cardsContainer}>
        {beliefsData.map((belief) => (
          <BeliefCard
            key={belief.title}
            iconClass={belief.iconClass}
            title={belief.title}
            description={belief.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BeliefsSection;