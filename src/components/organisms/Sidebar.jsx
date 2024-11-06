import React from 'react';
import '../../styles/organisms/Sidebar.css';
import Icon from '../atoms/Icon';

const Sidebar = () => (
  <nav className="sidebar">
    <Icon name="home" label="Control de Puerta" />
    <Icon name="attendance" label="Registro de Asistencia" />
    <Icon name="reports" label="Reportes" />
    <Icon name="camera" label="Reg. Cámara" />
    <Icon name="support" label="Soporte" />
    <Icon name="settings" label="Configuraciones" />
  </nav>
);

export default Sidebar;
