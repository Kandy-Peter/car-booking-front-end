/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Home.scss';
import Jeep from '../assets/images/7vylxq_large.png';
import settings from './caroussel';

const Homepage = () => {
  const cars = useSelector((state) => state.reducers.cars);

  return (
    <div className="home-container">
      <h1>Available Cars</h1>
      <h5>Check our best available cars</h5>
      <div className="cards-container">
        <Slider {...settings}>
          {
            cars.map((car) => (
              <Link to={`car/${car.id}`} key={car.id}>
                <div className="car-card">
                  <img src={Jeep} alt={car.name} />
                  <div className="descript">
                    <h2>
                      {car.name.slice(0, 9)}
                    </h2>
                  </div>
                </div>
              </Link>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Homepage;
