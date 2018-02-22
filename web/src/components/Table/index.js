import React from 'react';
import './style.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const Table = ({ rows = [], className }) => (
  <div className={`
    Table
    ${className ? className : ''}
  `}>
    <TableHeader/>
    {rows.map((row, index) => (
      <TableRow
        key={index}
        name={row.name}
        distance={row.distance}
        url={row.url}
        onIconClick={row.onIconClick}
      />
    ))}
  </div>
);
export default Table;
