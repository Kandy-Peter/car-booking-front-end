import React, { useState } from 'react';
import axios from 'axios';
import './popup.css';
import DatePicker from 'react-date-picker';

const PopUp = (props) => {
  const [value, onChange] = useState(new Date());
  const [updatedCity, setCity] = useState('');

  const upDateOperation = async (id) => {
    await axios.put(`http://[::1]:3000/api/v1/reservation/${id}`, {
      city: updatedCity,
      date: value,
    });
  };
  const handelEdit = (id) => {
    upDateOperation(id);
  };
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button type="button" className="close close-btn" aria-label="Close" onClick={() => props.setTrigger(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
        <form className="form">
          <label htmlFor="city" className="form-group">
            City:
            <input id="city" type="text" className="form-control" defaultValue={props.details.city} onChange={(e) => { setCity(e.target.value); }} />
          </label>
          <DatePicker className="date" onChange={onChange} value={value} />
          <button type="submit" onClick={() => { handelEdit(props.details.id); }} className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  ) : '';
};

export default PopUp;
