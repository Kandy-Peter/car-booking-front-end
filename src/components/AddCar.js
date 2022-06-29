import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '../logics/localStore';
import { carsURL } from '../logics/urls';
import { addCar } from '../redux/Reservations/reservation';

const AddCar = () => {
  const dispatch = useDispatch();

  const sendToAPI = async (data, form) => {
    const response = await axios.post(carsURL, data);
    if (response.status === 200) {
      dispatch(addCar(response.data));

      form.reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      model: e.target.model.value,
      car_image: e.target.image.value,
      reserved: true,
      per_day_amount: e.target.perDayAmount.value,
      user_id: getLocalStorage().user_id,
    };
    sendToAPI(data, e.target);
  };

  return (
    <section>
      <form className="add-car-form" onSubmit={handleSubmit}>
        <input className="add-car-input-field input-field" placeholder="Car Name" type="text" name="name" minLength="1" maxLength="100" required />
        <input className="add-car-input-field input-field" placeholder="Car Model" type="text" name="model" minLength="1" maxLength="100" required />
        <input className="add-car-input-field input-field" placeholder="Per Day Amount" type="text" name="perDayAmount" minLength="1" maxLength="100" required />
        <input className="add-car-input-field input-field" type="text" name="image" id="car_image" placeholder="Car Image Link" required />
        <button className="add-car-btn" type="submit">Create Car</button>
      </form>
    </section>
  );
};
export default AddCar;
