import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const AddReservation = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section>
      <form className="form">
        <label htmlFor="city" className="form-group">
          City:
          <input id="city" type="text" className="form-control" />
        </label>
        <DatePicker className="date" onChange={onChange} value={value} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};
export default AddReservation;
