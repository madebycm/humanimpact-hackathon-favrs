import React from 'react';
import './style.css';

const Button = ({ backgroundBlue, onClick, children }) => (
  <button className={backgroundBlue ? "Button BackgroundBlue" : "Button"} onClick={onClick}>
    {children}
  </button>
);

export default Button
