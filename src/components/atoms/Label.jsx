import React from 'react';
import '../../styles/atoms/Label.css';

const Label = ({ text, htmlFor }) => (
  <label className="label" htmlFor={htmlFor}>
    {text}
  </label>
);

export default Label;
