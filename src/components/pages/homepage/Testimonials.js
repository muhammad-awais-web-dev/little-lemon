import React from 'react';
import styles from './Testimonials.module.css'; // Import our scoped styles

// --- Updated with realistic testimonials ---
const testimonialsData = [
  {
    quote: 'The Greek Salad was so fresh and authentic! It felt like I was back in Athens. The service was impeccable.',
    authorName: 'Maria Sanchez',
    authorRole: 'Food Blogger',
  },
  {
    quote: 'I came for the Bruschetta and was not disappointed. Perfectly grilled bread with just the right amount of garlic and tomato. A must-try!',
    authorName: 'David Chen',
    authorRole: 'Local Guide',
  },
  {
    quote: 'My kids loved the Lemon Dessert. It was light, tangy, and absolutely delicious. We will definitely be coming back for more.',
    authorName: 'Sophie Williams',
    authorRole: 'Happy Parent',
  },
  {
    quote: 'An amazing dining experience from start to finish. The ambiance is cozy and the staff is incredibly friendly. 10/10!',
    authorName: 'Ben Carter',
    authorRole: 'Frequent Diner',
  },
];

// Inner Card Component (Not exported)
// This component is responsible for displaying a single testimonial.
const TestimonialCard = ({ quote, authorName, authorRole }) => {
  return (
    <article className={styles.card}>
      <div className={styles.avatar}>
        <i className="fa-solid fa-user"></i>
      </div>
      <p className={styles.quote}>"{quote}"</p>
      <footer className={styles.authorInfo}>
        <p className={styles.authorName}>{authorName}</p>
        <p className={styles.authorRole}>{authorRole}</p>
      </footer>
    </article>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.cardsContainer}>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.authorName} // Using authorName as a key since it's unique in this data set
            quote={testimonial.quote}
            authorName={testimonial.authorName}
            authorRole={testimonial.authorRole}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;