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
    swipeToSlide: true,
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
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerPadding: '70px',
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: false,
          prevArrow: false,
          centerPadding: '70px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          centerPadding: '70px',
        },
      },
      {
        breakpoint: 369,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          centerPadding: '50px',
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <h1>Available Cars</h1>
      <h5>Check our best available cars</h5>
      <div className="cards-container">
        <Slider {...settings}>
          {!cars.length ? <Loading /> : (
            cars.map((car) => (
              <Link to={`car/${car.name}`} key={car.id}>
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
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Homepage;
