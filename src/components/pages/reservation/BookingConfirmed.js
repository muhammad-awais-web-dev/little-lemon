import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './BookingConfirmed.module.css'

function BookingConfirmed() {
  return (
    <div className={Styles.confirmationMessage}>
      <h2>
        Your reservation has been confirmed! We look forward to serving you.
      </h2>
        <p>
        If you have any questions or need to make changes to your reservation, please contact us at (+123456789) or email reservations@littlelemon.
        </p>
        <Link to="/" className={Styles.link}>
        Back to Home
        </Link>
    </div>
  )
}

export default BookingConfirmed
