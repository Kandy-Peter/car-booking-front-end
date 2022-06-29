import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUniqueCar } from '../redux/Cars/carDetail';
import '../styles/card_details.scss';

const CarDetails = ({ id }) => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.uniqueCarReducer);
  useEffect(() => {
    dispatch(getUniqueCar(id));
  }, []);

  return (
    <>
      <div className="car_container" key={cars.id}>
        <img src={cars.car_image} alt={cars.name} />
        <div className="car_details">
          <h2>{cars.name}</h2>
          <ul>
            <li>
              Model:
              {' '}
              <span>{cars.model}</span>
            </li>
            <li className="price">
              Price:
              {' '}
              <span>
                {cars.per_day_amount}
                $
              </span>
            </li>
            <li>
              Availability:
              {cars.reserved === false ? (
                <span>No available</span>
              ) : (
                <span>available</span>
              )}
            </li>
          </ul>
          <span className="desc_short">Let us satisfy your desire!</span>
          <Link to="/create_reservation">
            <button
              type="button"
              className="reserve-btn"
            >
              Reserve Car
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarDetails;

CarDetails.propTypes = {
  id: PropTypes.number.required
};