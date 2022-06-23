import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyReservations = () => {
  const url = 'http://[::1]:3000/api/v1/reservation';
  const [reservation, setReservation] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setReservation(response.data);
    });
  }, []);

  return (
    <section>
      <h1>My Reservation</h1>
      <h2>{reservation}</h2>
    </section>
  );
};

export default MyReservations;
