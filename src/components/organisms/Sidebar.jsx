import React from 'react';
import '../styles/organisms/Sidebar.css';

const Sidebar = ({ onPanelChange }) => (
  <nav className="sidebar">
    <div className="sidebar-logo">
      <img src="/src/assets/logo-casel.png" alt="Logo CAS" />
      <span>CASEL</span>
    </div>
    <div className="icon" onClick={() => onPanelChange('control')}>
      <img src="/src/assets/door-icon.png" alt="Control de Puerta" />
      <span>Control de Puerta</span>
    </div>
    <div className="icon" onClick={() => onPanelChange('attendance')}>
      <img src="/src/assets/reg-asistencia.png" alt="Registro de Asistencia" />
      <span>Registro de Asistencia</span>
    </div>
    <div className="icon" onClick={() => onPanelChange('reports')}>
      <img src="/src/assets/reportes.png" alt="Reportes" />
      <span>Reportes</span>
    </div>
    <div className="icon" onClick={() => onPanelChange('recognition')}>
      <img src="/src/assets/reg-camara.png" alt="Reconocimiento Facial" />
      <span>Rec. Facial</span>
    </div>
    <div className="icon" onClick={() => onPanelChange('support')}>
      <img src="/src/assets/help.png" alt="Soporte" />
      <span>Soporte</span>
    </div>
    <div className="icon" onClick={() => onPanelChange('settings')}>
      <img src="/src/assets/config.png" alt="Configuraciones" />
      <span>Configuraciones</span>
    </div>
    <div className="footer">
      <img src="/src/assets/logo-emi.png" alt="EMI Logo" />
    </div>
  </nav>
);

export default Sidebar;
