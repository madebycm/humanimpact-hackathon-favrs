import React from 'react';
import './style.css'

const Avatar = ({ url = `${process.env.PUBLIC_URL}/Images/cat.jpg`, onClick }) => (
  <div className="AvatarContainer" onClick={onClick}>
    <img className="Avatar" src={url} alt="" />
  </div>
)

export default Avatar;
