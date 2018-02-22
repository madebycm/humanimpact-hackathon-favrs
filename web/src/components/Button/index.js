import React from 'react';
import './style.css';

const Button = ({ backgroundBlue, onClick, children }) => (
  <button
    className={`
      Button
      ${backgroundBlue ? "BackgroundBlue" : ""}
    `}
    onClick={onClick}>
    {children}
  </button>
);

export default Button
