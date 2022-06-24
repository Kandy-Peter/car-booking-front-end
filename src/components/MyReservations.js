import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from './Reservation';
import { setData } from '../redux/Reservations/reservation';

const MyReservations = () => {
  const reservations = useSelector((state) => state.allReservation.reservation);
  const dispatch = useDispatch();
  const fetchReservations = async () => {
    const response = await axios.get('http://[::1]:3000/api/v1/reservation');
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
            <td>Id</td>
            <td>City</td>
            <td>data</td>
            <td>Operation</td>
          </tr>
        </thead>
        <tbody>
          {
  reservations.map((reservation) => (
    <Reservation key={reservation.id} data={reservation} />
  ))
    }
        </tbody>
      </table>
    </section>

  );
};

export default MyReservations;
