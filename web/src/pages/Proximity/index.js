import React from 'react';
import Table from '../../components/Table'

import './style.css'

const Proximity = () => (
  <div className='Page'>
    <Table
      rows={[
        {
          name: 'Thomas',
          distance: '0,3km'
        },
        {
          name: 'Stine',
          distance: '0,3km'
        }
      ]}
    />
  </div>
);

export default Proximity;
