/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Home.scss';
import CarsHome from './car_cards';
import { fecthCars } from '../redux/Cars/cars';

const Homepage = () => {
  const cars = useSelector((state) => state.carReducers.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthCars());
  }, []);

  return (
    <div className="home-container">
      <h1>Available Cars</h1>
      <h5>Check our best available cars</h5>
      <div className="cards-container">
        <CarsHome cars={cars} />
      </div>
    </div>
  );
};

export default Homepage;
