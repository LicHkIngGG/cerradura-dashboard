import React, { useState } from 'react';
import '../styles/organisms/Header.css';
import Icon from '../atoms/Icon';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="header">
      <h1>Escuela Militar de Ingeniería <span>Laboratorio 102</span></h1>
      <div className="user-section">
        <div className="report-section">
          <Icon src="/src/assets/image-bug.png" alt="Reporte" className="user-icon" />
          <span className="report-text">Reportes</span>
        </div>
        <div className="notification-bell" onClick={toggleNotifications}>
          <Icon src="/src/assets/notifications.png" alt="Notificaciones" className="user-icon" />
          <span className="notification-text">Notificaciones</span>
        </div>
        <div className="user-profile">
          <Icon src="/src/assets/profile.png" alt="User" className="profile-icon" />
          <span>User</span>
        </div>
      </div>
      {showNotifications && (
        <div className="notification-menu">
          <h3>Notificaciones</h3>
          <ul>
            <li>Ejemplo 1: Mensaje de notificación</li>
            <li>Ejemplo 2: Mensaje de notificación</li>
            <li>Ejemplo 3: Mensaje de notificación</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
