import React, { useState } from 'react';
import axios from 'axios';
import './popup.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { reservationsURL } from '../../logics/urls';

const PopUp = ({
  detailsId, detailsCity, trigger, setTrigger,
}) => {
  const cars = useSelector((state) => state.allReservation.cars);
  const [selectedDate, setSelectedDate] = useState();
  const [updatedCity, setCity] = useState(detailsCity);
  const [option, setOption] = useState(1);
  const upDateOperation = async (id) => {
    await axios.put(`${reservationsURL}/${id}`, {
      city: updatedCity,
      date: selectedDate,
      car_id: option,
    });
  };
  const handelEdit = (id) => {
    upDateOperation(id);
  };

  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button type="button" className="close close-btn" aria-label="Close" onClick={() => setTrigger(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
        <form className="form">
          <label htmlFor="city" className="form-group">
            City:
            <input id="city" type="text" className="form-control" defaultValue={detailsCity} onChange={(e) => { setCity(e.target.value); }} />
          </label>
          <label htmlFor="car" className="form-group">
            Car:
            <select
              value={option}
              onChange={(e) => {
                setOption(e.target.value);
              }}
              id="cars"
            >
              {

              cars.map((car) => (
                <option key={car.id} value={car.id}>{car.name}</option>
              ))
            }
            </select>
          </label>
          <div>
            Date
            <DatePicker
              selected={selectedDate}
              onSelect={(date) => setSelectedDate(new Date(`${date.getMonth()}/${date.getDate() + 1}/${date.getFullYear()}`))}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableMonthYearDropdown
              required
            />
          </div>

          <button type="submit" onClick={() => { handelEdit(detailsId); }} className="form-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  ) : '';
};
PopUp.defaultProps = {
  detailsId: 1,
  detailsCity: '',
  trigger: false,
  setTrigger: false,
};
PopUp.propTypes = {
  detailsId: PropTypes.number,
  detailsCity: PropTypes.string,
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
};
export default PopUp;
