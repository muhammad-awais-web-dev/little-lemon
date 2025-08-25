import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    <img src={`${process.env.PUBLIC_URL}/SVG/Footer-Logo.svg`} alt="" />
    <div>
        <nav>
            <ul id="footerNav">
                <li><Link to="/" className="navLink" >Home</Link></li>
                <li><Link to="/about" className="navLink" >About Us</Link></li>
                <li><Link to="/menu" className="navLink" >Menu</Link></li>
                <li><Link to="/reservation" className="navLink" >Reservation</Link></li>
                <li><Link to="/orderOnline" className="navLink" >Order Online</Link></li>
                <li><Link to="/login" className="navLink" >Login</Link></li>
            </ul>
        </nav>
        <p>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
        </p>
        <p>Little Lemon &copy; 2025. All Rights Reserved </p>
    </div>
    </footer>
  )
}

export default Footer
