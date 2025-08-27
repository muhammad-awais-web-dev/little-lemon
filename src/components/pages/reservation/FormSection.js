import React, { useReducer } from 'react';
import Styles from './FormSection.module.css';
import ReservationForm from './ReservationForm';
import { fetchAPI } from './api';

// Function to update times (reducer)
function updateTimes(state, action) {
  if (action.type === 'update_times') {
    return fetchAPI(new Date(action.date));
  }
  return state;
}


// Function to initialize available times
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function FormSection() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <section className={Styles.Container}>
      <div>
        <h2>How to Reserve</h2>
        <p><strong>Online (Fastest):</strong> Use the reservation form on this page, choose date, time, and party size.<br />
        <strong>Phone:</strong> Call us at (+123456789) to speak with a host.<br />
        <strong>Email:</strong> reservations@littlelemon for special requests or group bookings.</p>
        <h2>Before Reserving A Table</h2>
        <h3>Group Bookings & Private Events</h3>
        <p>
          <strong>Small groups (6-10):</strong> Bookable via the standard form or phone. <br />
          <strong>Large parties & private events (10+):</strong> Please email events@littlelemon or call us, we may require a group menu and deposit for larger bookings. Tell us the date, number of guests, and any special requests.
        </p>
      </div>
      <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default FormSection;
