import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteData } from '../redux/Reservations/reservation';
import PopUp from './Popup/PopUp';

const Reservation = ({ id, city, date }) => {
  const dispatch = useDispatch();
  const [buttonPopup, SetButtonPopup] = useState(false);
  const [details, setDetails] = useState({ id: 1, city: '', date: '' });

  const deleteOperation = (id) => {
    axios.delete(`http://[::1]:4000/api/v1/reservation/${id}`);
  };

  const showOperation = async (id) => {
    const response = await axios.get(`http://[::1]:4000/api/v1/reservation/${id}`);
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
  id: '',
  city: '',
  date: '',
};
Reservation.propTypes = {
  id: PropTypes.number,
  city: PropTypes.string,
  date: PropTypes.string,
};

export default Reservation;
