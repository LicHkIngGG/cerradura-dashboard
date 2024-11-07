import React from 'react';
import '../styles/organisms/Header.css';
import Icon from '../atoms/Icon';

const Header = () => (
  <header className="header">
    <h1>Escuela Militar de Ingeniería <span>Laboratorio 102</span></h1>
    <div className="user-section">
      <Icon src="/src/assets/notification.png" alt="Notifications" className="user-icon" />
      <div className="user-profile">
        <Icon src="/src/assets/profile.png" alt="User" className="profile-icon" />
        <span>Emerson</span>
      </div>
    </div>
  </header>
);


export default Header;
