import React from 'react';
import './style.css';

import Avatar from '../../Avatar'

const TableRow = ({ name, distance, url, onIconClick }) => (
  <div className="TableRow">
    <div className="TableCell">
      <div className="Flex">
        <Avatar url={url} />
        <span className='u-ml--'>{name}</span>
      </div>
    </div>
    <div className="TableCell">
      {distance}
    </div>
    <div className="TableCell">
      <Avatar url={`${process.env.PUBLIC_URL}/Images/ChatIcon.png`} onClick={onIconClick} />
    </div>
  </div>
)

export default TableRow;
