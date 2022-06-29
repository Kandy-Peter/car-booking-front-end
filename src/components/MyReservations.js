import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from './Reservation';
import { setData } from '../redux/Reservations/reservation';
import { reservationsURL } from '../logics/urls';

const MyReservations = () => {
  const reservations = useSelector((state) => state.allReservation.reservation);
  const dispatch = useDispatch();
  const fetchReservations = async () => {
    const response = await axios.get(reservationsURL);
    dispatch(setData(response.data.data));
  };
  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <section>
      <table className="table table-borderless w-75">
        <thead>
          <tr>
            <th>Id</th>
            <th>City</th>
            <th>Data</th>
            <th>Car</th>
            <th className="d-flex justify-content-center">Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            reservations.map((reservation) => {
              /* eslint-disable */ 

              const {
                car_id, id, city, date,
              } = reservation;
              return (
                <Reservation
                  key={reservation.id}
                  id={id}
                  city={city}
                  date={date}
                  carId={car_id}
                />
              );
            })
}
        </tbody>
      </table>
    </section>

  );
};

export default MyReservations;
