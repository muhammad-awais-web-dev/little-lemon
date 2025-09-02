import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Import styles


const restaurant = process.env.PUBLIC_URL + '/images/restaurant.webp';

function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-container">
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Little Lemon <br />
            <span>Chicago</span>
          </h1>
          <p className="home-hero-text">
            We are a family-owned Mediterranean restaurant, rooted in tradition
            and inspired by innovation. Our dishes celebrate classic recipes
            passed down through generations, while adding a fresh, modern twist
            to create a dining experience that feels both authentic and new.
          </p>
          <Link className="home-hero-button button" to="/reservation">
            Book A Table
          </Link>
        </div>

        <div className="home-hero-image">
          <img src={restaurant} alt="Restaurant"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
