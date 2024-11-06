import React, { useState } from 'react';
import '../../styles/organisms/DoorControlPanel.css';

const DoorControlPanel = () => {
  const [isLocked, setIsLocked] = useState(false);

  const toggleDoor = () => {
    setIsLocked(!isLocked);
    // Aquí irá la lógica de conexión con el hardware para abrir/cerrar la puerta
  };

  return (
    <div className="door-control-panel">
      <h2>Control de la Chapa Eléctrica</h2>
      <button onClick={toggleDoor} className={isLocked ? 'locked' : 'unlocked'}>
        {isLocked ? 'Estado: Bloqueado' : 'Estado: Desbloqueado'}
      </button>
    </div>
  );
};

export default DoorControlPanel;
