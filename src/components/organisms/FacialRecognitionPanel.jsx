import React from 'react';
import '../styles/organisms/FacialRecognitionPanel.css';
import Button from '../atoms/Button';

const FacialRecognitionPanel = () => (
  <div className="facial-recognition-panel">
    <h2>Registro de Reconocimiento Facial</h2>
    <p>Comience con el entrenamiento para un nuevo usuario</p>
    <Button label="Generar Estudiante" onClick={() => { /* Lógica de generación de estudiante */ }} />
    <Button label="Generar Encargado" onClick={() => { /* Lógica de generación de encargado */ }} />
  </div>
);

export default FacialRecognitionPanel;
