import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, setCars } from '../redux/Reservations/reservation';
import { fetchCars } from './AddReservation';
import PopUp from './Popup/PopUp';
import { reservationsURL } from '../logics/urls';

const Reservation = ({
  id, city, date, carId,
}) => {
  const dispatch = useDispatch();
  const [buttonPopup, SetButtonPopup] = useState(false);
  const [details, setDetails] = useState({
    id: 1, city: '', date: '', car_id: 1,
  });
  const cars = useSelector((state) => state.allReservation.cars);
  const car = useSelector((state) => state.allReservation.cars.filter((item) => item.id === carId));
  if (cars.length === 0) {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  }
  const deleteOperation = (id) => {
    axios.delete(`${reservationsURL}/${id}`);
  };

  const showOperation = async (id) => {
    const response = await axios.get(`${reservationsURL}/${id}`);
    setDetails(response.data.data);
  };

  const handelDelete = (id) => {
    deleteOperation(id);
    dispatch(deleteData(id));
  };
  const handelEdit = (id) => {
    SetButtonPopup(true);
    showOperation(id);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{city}</td>
      <td>{date}</td>
      {
        car.length !== 0
        && <td>{car[0].name}</td>
      }

      <td className="d-flex justify-content-around">
        <button className="btn btn-danger" type="button" onClick={() => handelDelete(id)}> Delete</button>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => handelEdit(id)}
        >
          Edit
        </button>

        <PopUp
          detailsId={details.id}
          detailsCity={details.city}
          trigger={buttonPopup}
          setTrigger={SetButtonPopup}
        />

      </td>
    </tr>

  );
};
Reservation.defaultProps = {
  id: 1,
  carId: 1,
  city: '',
  date: '',
};
Reservation.propTypes = {
  carId: PropTypes.number,
  id: PropTypes.number,
  city: PropTypes.string,
  date: PropTypes.string,
};

export default Reservation;
