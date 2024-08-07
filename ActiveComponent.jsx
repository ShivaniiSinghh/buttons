
import React from 'react';
import './ActiveComponent.css'; 
const ActiveComponent = ({ children, className }) => {
  return <h4 className={`heading1 ${className}`}>{children}</h4>;
};

export default ActiveComponent;
