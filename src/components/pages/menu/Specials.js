import React from 'react';
import styles from './Specials.module.css'; // Using CSS Modules for scoped styles
import { Link } from 'react-router-dom';

// Placeholder images - replace with your actual image imports or URLs
const greekSaladImg = process.env.PUBLIC_URL + '/images/greek-salad.webp';
const bruschettaImg = process.env.PUBLIC_URL + '/images/bruschetta.webp';
const lemonDessertImg = process.env.PUBLIC_URL + '/images/lemon-dessert.webp';

// Data for our special items
const specials = [
  {
    image: greekSaladImg,
    title: 'Greek Salad',
    description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    image: bruschettaImg,
    title: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    image: lemonDessertImg,
    title: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

// Inner Card Component (Not exported)
// It's a good practice to define this outside the main component to avoid re-creation on every render.
const SpecialCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

// Main Component
const HomeSpecials = () => {
  return (
    <section className={styles.specialsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>This Week's Specials</h2>
        <Link to='/menu' className="button">View Menu &rarr;</Link>
      </div>
      <div className={styles.cardsContainer}>
        {specials.map((special) => (
          <SpecialCard
            key={special.title} // A unique key is crucial for lists in React
            image={special.image}
            title={special.title}
            description={special.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSpecials;