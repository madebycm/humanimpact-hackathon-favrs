import React from 'react';
import './style.css';

const IconButton = ({ text, onClick }) => (
  <button className="IconButton" onClick={onClick}>
    <div className="IconContainer u-mr--">
      <img className="Icon" src={`${process.env.PUBLIC_URL}/Images/HighFiveIcon.png`} alt=""/>
    </div>
    {text}
  </button>
);

export default IconButton
