// src/components/icons/CheckmarkIcon.js
import React from 'react';

const CheckmarkIcon = ({ width = 19, height = 17, fill = 'white' }) => (
  <svg width={width} height={height} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 9.71429L6.33337 13.4675L19 0L6.33337 17L0 9.71429Z" fill={fill} />
  </svg>
);

export default CheckmarkIcon;
