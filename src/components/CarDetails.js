import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fecthCars } from '../redux/Cars/cars';

const CarDetails = () => {
  const cars = useSelector((state) => state.reducers.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthCars);
  }, []);

  const { name } = useParams();
  const selectedCar = cars?.filter((car) => car.name === name);

  return (
    <>
      {selectedCar.map((item) => (
        <div className="car_container" key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default CarDetails;
