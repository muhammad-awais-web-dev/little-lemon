import React from 'react'
import Styles from './Hero.module.css'

const imageChef = process.env.PUBLIC_URL + '/images/restrauntfood2.webp';

function Hero() {
  return (
    <section className={Styles.Hero}>
      <p>At Little Lemon we cook from memory and from market stalls, citrus-forward, herb-rich dishes inspired by the Mediterranean coastline. Perfect for sharing, built for flavour, and easy to pair with a glass from our curated drinks list.</p>
      <img src={imageChef} alt="image-of-a-chef" />
    </section>
  )
}

export default Hero
