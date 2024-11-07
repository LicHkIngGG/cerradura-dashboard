import React from 'react';
import '../styles/organisms/AttendanceTable.css';

const AttendanceTable = ({ data }) => (
  <div className="attendance-table">
    <h2>Registro de Asistencia</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Hora</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>{entry.time}</td>
            <td>{entry.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AttendanceTable;
