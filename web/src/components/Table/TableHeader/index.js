import React from 'react';
import './style.css';

const TableHeader = ({ columns = [] }) => (
  <div className="TableHeader">
    <div className="TableCell">Profile</div>
    <div className="TableCell">Distance</div>
    <div className="TableCell">Chat</div>
  </div>
);

export default TableHeader;
