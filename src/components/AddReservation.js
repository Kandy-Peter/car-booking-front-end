import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalStorage } from '../logics/localStore';
import { createReserve, setCars } from '../redux/Reservations/reservation';
import { reservationsURL, carsURL } from '../logics/urls';

export const fetchCars = async () => {
  const response = await axios.get(carsURL);
  return response;
};
const AddReservation = () => {
  const cars = useSelector((state) => state.allReservation.cars);
  const [option, setOption] = useState(cars.length === 0 ? '' : cars[0].id);
  const [selectedDate, setSelectedDate] = useState(null);
  const [updatedCity, setCity] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const createOperation = async () => {
    const response = await axios.post(reservationsURL, {
      user_id: getLocalStorage().user_id,
      city: updatedCity,
      date: selectedDate,
      car_id: option,
    });
    if (response.status === 200) {
      dispatch(createReserve(response.data.data));
      navigate('/my_reservations');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createOperation();
  };

  const handelFetchCars = () => {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  };

  useEffect(() => {
    handelFetchCars();
  }, []);

  return (
    <section className=" add .container w-100 d-flex vh-100 justify-content-center .align-items-center">
      <form onSubmit={handleSubmit} className=".container w-50 form  justify-content-center .align-items-center">
        <label htmlFor="city" className="form-group">
          City:
          <input id="city" type="text" className="form-control" onChange={(e) => { setCity(e.target.value); }} required />
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
                <option key={car.name} value={car.id}>{car.name}</option>

              ))
}

          </select>
        </label>
        <div className="w-30">
          Date:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(new Date(`${date.getMonth()}/${date.getDate() + 1}/${date.getFullYear()}`))}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableMonthYearDropdown
            required
          />
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </section>
  );
};
export default AddReservation;
