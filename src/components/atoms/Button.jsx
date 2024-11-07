import React from 'react';
import '../styles/atoms/Button.css';

const Button = ({ onClick, text }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
