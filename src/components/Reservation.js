import React from 'react';
// import PropTypes from 'prop-types';

const Reservation = ({ data }) => {
  console.log(data);
  return (
    <>
      <a href="#" className="list-group-item list-group-item-action" aria-current="true">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{data.city}</h5>
          <small>{data.date}</small>
        </div>
        <p className="mb-1">{data.car_id.name}</p>
        <small>And some small print.</small>
      </a>
    </>
  );
};
// Reservation.propTypes = {
//   data: PropTypes.objectOf(
//     PropTypes.number,
//     PropTypes.string,
//   ),
// };

export default Reservation;
