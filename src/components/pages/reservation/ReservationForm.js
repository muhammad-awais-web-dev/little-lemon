import React, { useState } from 'react';
import Styles from './ReservationForm.module.css';
import { submitAPI } from './api';
import { useNavigate } from 'react-router-dom';


function ReservationForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('None');
  
  const formValid = date && time && guests > 0 && guests <= 10;

  const navigete = useNavigate()
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Dispatch an action to update times based on the new date
    dispatch({ type: 'update_times', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      if (submitAPI(formData)) {
        navigete('/confirmedBooking');
        // Reset form
        setDate('');
        setTime('');
        setGuests(1);
        setOccasion('None');
      } else {
        alert('Reservation failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label htmlFor="res-date" className={Styles.label}>Choose date</label>
        <input
          type="date"
          id="res-date"
          className={Styles.input}
          value={date}
          onChange={handleDateChange}
        />
        {!date ? (
          <span className={Styles.error}>Please select a date</span>
        ) : null}

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
        {!time ? (
          <span className={Styles.error}>Please select a time</span>
        ) : null}

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
        {guests < 1 || guests > 10 ? (
          <span className={Styles.error}>Number of guests must be between 1 and 10</span>
        ) : null}

        <label htmlFor="occasion" className={Styles.label}>Occasion</label>
        <select
          id="occasion"
          className={Styles.select}
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
        >
          <option value="None">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          disabled={!formValid}
          className={formValid ? Styles.button : Styles.buttonDisabled}
        />
      </form>
    </div>
  );
}

export default ReservationForm;
