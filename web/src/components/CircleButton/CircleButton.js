import React from 'react';
import './style.css'

const CircleButton = ({ fileName, text, onClick, className }) => (
  <button
    className={`
      CircleButton
      ${className ? className : ""}
    `}
    onClick={onClick}
  >
    <img  className="ButtonIcon" src={`${process.env.PUBLIC_URL}/Images/${fileName}`} alt=""/>
    {text}
  </button>
)

export default CircleButton;
