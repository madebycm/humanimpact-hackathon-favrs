import React from 'react';
import './style.css'

const Avatar = ({ url = `${process.env.PUBLIC_URL}/Images/cat.jpg` }) => (
  <div className="AvatarContainer">
    <img className="Avatar" src={url} alt="" />
  </div>
)

export default Avatar;
