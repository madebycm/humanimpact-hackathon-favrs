import React from 'react';
import './style.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const Table = ({ rows = [] }) => (
  <div className="Table">
    <TableHeader/>
    {rows.map((row, index) => (
      <TableRow
        key={index}
        name={row.name}
        distance={row.distance}
        url={row.url}
      />
    ))}
  </div>
);
export default Table;
