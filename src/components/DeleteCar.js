import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar } from '../redux/Reservations/reservation';

const DeleteCar = () => {
  const cars = useSelector((state) => state.allReservation.cars);
  const dispatch = useDispatch();
  const deleteOperation = (id) => {
    axios.delete(`http://[::1]:4000/api/v1/cars/${id}`);
  };
  const handelDelete = (id) => {
    deleteOperation(id);
    dispatch(deleteCar(id));
  };
  return (
    <section>
      <ul className="cars-container">
        {
      cars.map((car) => (
        <li className="car-card" key={car.id}>
          <img className="car-image" src={car.car_image} alt="car_image" />
          <div className="car-details">
            <span className="car-title">
              {car.name}
              {' '}
              {car.model}
            </span>
            <button className="btn btn-danger" type="button" onClick={() => handelDelete(car.id)}> Delete</button>
          </div>
        </li>
      ))
    }
      </ul>
    </section>
  );
};

export default DeleteCar;
