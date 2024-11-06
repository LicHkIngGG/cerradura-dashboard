import React from 'react';
import '../../styles/molecules/StatusIndicator.css';

const StatusIndicator = ({ status }) => (
  <div className={`status-indicator ${status ? 'active' : 'inactive'}`}>
    {status ? 'Activo' : 'Inactivo'}
  </div>
);

export default StatusIndicator;
