import React from 'react';
import '../../styles/atoms/Button.css';

const Button = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
