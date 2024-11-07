import React from 'react';
import Sidebar from '../organisms/Sidebar';
import Header from '../organisms/Header';
import DoorControlPanel from '../organisms/DoorControlPanel';
import AttendanceTable from '../organisms/AttendanceTable';
import ReportsGenerator from '../organisms/ReportsGenerator';
import FacialRecognitionPanel from '../organisms/FacialRecognitionPanel';
import '../styles/templates/DashboardLayout.css';

const DashboardLayout = ({ activePanel, onPanelChange }) => (
  <div className="dashboard-layout">
    <Sidebar onPanelChange={onPanelChange} />
    <Header />
    <main className="main-content">
      {activePanel === 'control' && <DoorControlPanel />}
      {activePanel === 'attendance' && <AttendanceTable data={sampleData} />}
      {activePanel === 'reports' && <ReportsGenerator />}
      {activePanel === 'recognition' && <FacialRecognitionPanel />}
    </main>
  </div>
);

// Datos de ejemplo para el componente AttendanceTable
const sampleData = [
  { id: 1, name: 'Roberto Sea', time: '07:43', date: '06-11-2024' },
  { id: 2, name: 'Jose Rojas', time: '07:45', date: '06-11-2024' },
];

export default DashboardLayout;
