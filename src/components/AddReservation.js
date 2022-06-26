import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../logics/localStore';

const AddReservation = () => {
  const [updatedCity, setCity] = useState();
  const [value, onChange] = useState(new Date());
  const createOperation = async () => {
    await axios.post('http://[::1]:4000/api/v1/reservation', {
      user_id: getLocalStorage().user_id,
      city: updatedCity,
      date: value,
      car_id: 1,
    });
  };
  const handelCreate = () => {
    createOperation();
  };
  return (
    <section>
      <form className="form">
        <label htmlFor="city" className="form-group">
          City:
          <input id="city" type="text" className="form-control" onChange={(e) => { setCity(e.target.value); }} />
        </label>
        <DatePicker format="MM-dd-y" className="date" onChange={onChange} value={value} />
        <Link to="/my_reservations">
          <button type="submit" className="btn btn-primary" onClick={() => { handelCreate(); }}>Submit</button>
        </Link>
      </form>
    </section>
  );
};
export default AddReservation;
