import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fecthCars } from '../redux/Cars/cars';
import Jeep from '../assets/images/7vylxq_large.png';
import '../styles/card_details.scss';

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
          <img src={Jeep} alt={item.name} />
          <div className="car_details">
            <h2>{item.name.slice(0, 9)}</h2>
            <ul>
              <li>
                model:
                {' '}
                {item.model}
              </li>
              <li className="price">
                price:
                {' '}
                {item.per_day_amount}
                $
              </li>
              <li>
                {item.reserved === false ? (
                  <li>availability: No available</li>
                ) : (
                  <li>availability: available</li>
                )}
              </li>
            </ul>
            <span>Let us satisfy your desire!</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarDetails;
