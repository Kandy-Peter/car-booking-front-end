import React from 'react';
import './popup.css';

const PopUp = (props) => ((props.trigger) ? (

  <div className="popup">
    <div className="popup-inner">
      <button type="button" className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
    </div>
  </div>

) : '');

export default PopUp;
