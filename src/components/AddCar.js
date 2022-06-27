import React from 'react';
import { getLocalStorage } from '../logics/localStore';
import { carsURL } from '../logics/urls';

const AddCar = () => {
  const sendToAPI = (data) => {
    fetch(carsURL, {
      body: data,
      method: 'POST',
    })
      .then((response) => response.json())
      .catch((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('post[name]', e.target.name.value);
    data.append('post[model]', e.target.model.value);
    data.append('post[car_image]', e.target.image.files[0]);
    data.append('post[reserved]', true);
    data.append('post[per_day_amount]', e.target.per_day_amount.value);
    data.append('post[user_id]', getLocalStorage().user_id);
    sendToAPI(data);
  };

  return (
    <section>
      <form className="add-car-form" onSubmit={handleSubmit}>
        <input className="add-car-input-field input-field" placeholder="Car Name" type="text" name="name" minLength="1" maxLength="100" required />
        <input className="add-car-input-field input-field" placeholder="Car Model" type="text" name="model" minLength="1" maxLength="100" required />
        <input className="add-car-input-field input-field" placeholder="Per Day Amount" type="text" name="per_day_amount" minLength="1" maxLength="100" required />
        <label htmlFor="#car_image" className="choose-car-img-label">Choose Car Image</label>
        <input className="add-car-input-field" type="file" name="image" id="car_image" required />
        <button className="add-car-btn" type="submit">Create Car</button>
      </form>
    </section>
  );
};
export default AddCar;
