import React from 'react';

const DeleteCar = () => {
  const cars = [
    {
      id: 1, name: 'Bughatti', model: 'Chiron', car_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bugatti_Chiron_%2836559710091%29.jpg/800px-Bugatti_Chiron_%2836559710091%29.jpg',
    },
    {
      id: 2, name: 'Ford', model: 'GT', car_image: 'https://www.topgear.com/sites/default/files/images/news-article/2019/07/f58e39bda9d8a390cee4dc25dfab297b/2006-ford-gt_0.jpg',
    },
    {
      id: 3, name: 'Ferrari', model: 'SF90 Stradale', car_image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Ferrari/SF90-Stradale/7858/1591619661237/front-left-side-47.jpg',
    },
    {
      id: 4, name: 'Lotus', model: 'Evija', car_image: 'https://img.gta5-mods.com/q95/images/2020-lotus-evija-add-on-fivem/8e2749-EVE-20211127212027.010.png',
    },
    {
      id: 5, name: 'Lamborghini', model: 'Aventador', car_image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg?tr=w-135',
    },
  ];
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
            <button type="button" className="car-dlt-btn">Delete</button>
          </div>
        </li>
      ))
    }
      </ul>
    </section>
  );
};

export default DeleteCar;
