import React from 'react'
import Styles from './Hero.module.css'

function Hero() {
  return (
    <section className={Styles.hero}>
      <h2>How to Reserve</h2>
      <p><strong>Online (Fastest):</strong> Use the reservation form on this page, choose date, time, and party size.</p>
      <p><strong>Phone:</strong> Call us at (+123456789) to speak with a host.</p>
      <p><strong>Email:</strong> reservations@littlelemon for special requests or group bookings.</p>
    </section>
  )
}

export default Hero
