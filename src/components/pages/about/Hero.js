import React from 'react'
import Styles from './Hero.module.css'


const chefA = process.env.PUBLIC_URL + '/images/Chef(1).webp';

function Hero() {
  return (
    <section className={Styles.Hero}>
        <div className={Styles.LeftSide}>
            <h2>Our Story</h2>
            <p>Little Lemon began as a small idea between relatives who loved to cook. Inspired by memories of slow-simmered sauces, sun-ripened lemons, and family gatherings around a crowded table, we set out to bring those flavours to our neighbourhood, but with a contemporary twist. We respect the classics, but we aren’t afraid to experiment: think slow-roasted eggplant served with a zesty citrus dressing, or a time-honoured lamb recipe lightened with seasonal herbs.</p>
        </div>
        <div className={Styles.RightSide}>
            <img src={chefA} alt="Chef Cooking" />
        </div>
    </section>
  )
}

export default Hero
