import React from 'react';

import './style.css'

const Wrapper = ({className, children}) => (
  <div className={`
    Wrapper
    ${className ? className : ''}
  `}>
    {children}
  </div>
);

export default Wrapper;
