import React from 'react'
import { useState } from 'react';
import Styles from './FormSection.module.css'
import ReservationForm from './ReservationForm'

function FormSection() {
    const [availableTimes, setAvailableTimes] = useState([
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ]);
  return (
    <section className={Styles.Container}>
        <ReservationForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}  />
        <div>
            <h2>Before Reserving A Table</h2>
            <h3>Group Bookings & Private Events</h3>
            <p><strong>Small groups (6-10):</strong> Bookable via the standard form or phone.
                <strong>Large parties & private events (10+):</strong> Please email events@littlelemon or call us — we may require a group menu and deposit for larger bookings. Tell us the date, number of guests, and any special requests.</p>
        </div>
    </section>
  )
}

export default FormSection
