import React from 'react';
import '../styles/molecules/NotificationBell.css';

const NotificationBell = ({ notifications }) => (
  <div className="notification-bell">
    <span className="bell-icon">🔔</span>
    {notifications > 0 && <span className="badge">{notifications}</span>}
  </div>
);

export default NotificationBell;
