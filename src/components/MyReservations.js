import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reservation from './Reservation';

const MyReservations = () => {
  const url = 'http://localhost:3000/api/v1/reservation';
  const [reservations, setReservation] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setReservation(response.data.data);
    });
  }, []);
  if (reservations) {
    return (
      <section>
        <div className="list-group">
          {
          reservations.map((reservation) => (

            <Reservation key={reservation.id} data={reservation} />

          ))
      }
        </div>
      </section>
    );
  }
  return <></>;
};

export default MyReservations;
