import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteData } from '../redux/Reservations/reservation';
import PopUp from './Popup/PopUp';

const Reservation = ({ data }) => {
  const { id, city, date } = data;
  const dispatch = useDispatch();
  const [buttonPopup, SetButtonPopup] = useState(false);
  const deleteOperation = (id) => {
    axios.delete(`http://[::1]:3000/api/v1/reservation/${id}`);
  };

  const handelDelete = (id) => {
    deleteOperation(id);
    dispatch(deleteData(id));
  };
  const handelEdit = (id) => {
    SetButtonPopup(true);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{city}</td>
      <td>{date}</td>
      <td>
        <button className="btn btn-danger" type="button" onClick={() => handelDelete(id)}> Delete</button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => handelEdit(id)}
        >
          Edit
        </button>
        <PopUp trigger={buttonPopup} setTrigger={SetButtonPopup} />
      </td>
    </tr>

  );
};

export default Reservation;
