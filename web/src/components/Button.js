import React from 'react';

const Button = ({onClick, className, children}) => (
  <button
    classNam={`
      ${className ? className : ''}
    `}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
