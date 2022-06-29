/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import settings from './caroussel';

const CarsHome = ({ cars }) => {
  if (cars.length <= 2) {
    return (
      <div className="caroussel_row">
        {
          cars.map((car) => (
            <Link id={car.id} to={`car/${car.id}`} key={car.id}>
              <div className="car-card">
                <img src={car.car_image} alt={car.name} />
                <div className="descript">
                  <h2>
                    {car.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
  return (
    <Slider {...settings}>
      {
            cars.map((car) => (
              <Link to={`car/${car.id}`} key={car.id}>
                <div className="car-card">
                  <img src={car.car_image} alt={car.name} />
                  <div className="descript">
                    <h2>
                      {car.name}
                    </h2>
                  </div>
                </div>
              </Link>
            ))
          }
    </Slider>
  );
};

export default CarsHome;
