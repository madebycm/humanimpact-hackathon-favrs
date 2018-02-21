import React from 'react';
import './style.css';

const IconButton = ({ label, onClick }) => (
  <div className="IconButton" onClick={onClick}>
    <div className="IconContainer">
      <img className="Icon" src={`${process.env.PUBLIC_URL}/Images/HighFiveIcon.png`} alt=""/>
    </div>
    {label}
  </div>
);

export default IconButton
