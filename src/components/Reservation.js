import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteData } from '../redux/Reservations/reservation';

const Reservation = ({ data }) => {
  const { id, city, date } = data;
  const dispatch = useDispatch();

  const deleteOperation = (id) => {
    axios.delete(`http://[::1]:3000/api/v1/reservation/${id}`);
  };

  const handelDelete = (id) => {
    deleteOperation(id);
    dispatch(deleteData(id));
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{city}</td>
      <td>{date}</td>
      <td>
        <button className="btn btn-danger" type="button" onClick={() => handelDelete(id)}> Delete</button>
      </td>
    </tr>

  );
};

export default Reservation;
