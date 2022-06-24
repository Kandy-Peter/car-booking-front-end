import React from 'react';

const Reservation = (data) => {
  const { id, city, date } = data;
  return (
    <tr>
      <td>{id}</td>
      <td>{city}</td>
      <td>{date}</td>
    </tr>

  );
};

export default Reservation;
