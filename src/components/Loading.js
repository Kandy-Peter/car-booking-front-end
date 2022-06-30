import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/loading.scss';
import { fetchCars } from './AddReservation';
import { setCars } from '../redux/Reservations/reservation';

const Loading = () => {
  const dispatch = useDispatch();

  const handelFetchCars = () => {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  };
  useEffect(() => {
    handelFetchCars();
  }, []);

  return (
    <div className="loading_container">
      <div className="pulsion" />
    </div>

  );
};

export default Loading;
