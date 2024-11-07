import React, { useState } from 'react';
import DashboardLayout from './components/templates/DashboardLayout';
import './App.css';

const App = () => {
  const [activePanel, setActivePanel] = useState('control'); // Estado inicial en el panel de control de puerta

  // Función para manejar el cambio de panel
  const handlePanelChange = (panel) => {
    setActivePanel(panel);
  };

  return (
    <DashboardLayout activePanel={activePanel} onPanelChange={handlePanelChange} />
  );
};

export default App;
