import React from 'react';
import './style.css'

const CircleButton = ({ fileName, text, className }) => (
  <button className={`CircleButton ${className ? className : ""}`}>
    <img  className="ButtonIcon" src={`${process.env.PUBLIC_URL}/Images/${fileName}`} alt=""/>
    {text}
  </button>
)

export default CircleButton;
