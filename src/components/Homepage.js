/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Home.scss';
import Loading from './Loading';
import Jeep from '../assets/images/7vylxq_large.png';
import { SampleNextArrow, SamplePrevArrow } from './arrows';

const Homepage = () => {
  const cars = useSelector((state) => state.reducers.cars);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <h1>Available Cars</h1>
      <div className="cards-container caroussel">
        <div className="caroussel-inner">
          <Slider {...settings}>
            {!cars.length ? <Loading /> : (
              cars.map((car) => (
                <Link to={`car/${car.name}`} key={car.id}>
                  <div className="car-card">
                    <img src={Jeep} alt={car.name} />
                    <h2>{car.name}</h2>
                    <h3>{car.model}</h3>
                    <p>{car.per_day_amount}</p>
                  </div>
                </Link>
              ))
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
