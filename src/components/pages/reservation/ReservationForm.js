import React, { useState } from 'react';
import Styles from './ReservationForm.module.css';

function ReservationForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Dispatch an action to update times based on the new date
    dispatch({ type: 'update_times', date: selectedDate });
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form data-testid="reservation-form" className={Styles.form}>
        <label htmlFor="res-date" className={Styles.label}>Choose date</label>
        <input
          type="date"
          id="res-date"
          className={Styles.input}
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time" className={Styles.label}>Choose time</label>
        <select
          id="res-time"
          className={Styles.select}
          value={time}
          onChange={e => setTime(e.target.value)}
        >
          {availableTimes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests" className={Styles.label}>Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          className={Styles.input}
          value={guests}
          onChange={e => setGuests(e.target.value)}
        />

        <label htmlFor="occasion" className={Styles.label}>Occasion</label>
        <select
          id="occasion"
          className={Styles.select}
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          className={Styles.button}
        />
      </form>
    </div>
  );
}

export default ReservationForm;
