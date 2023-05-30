import React, { useState } from 'react';
import axios from 'axios';
import './CreateTournament.css'; // Importar los estilos CSS

const CreateTournament = () => {
  const [tournamentData, setTournamentData] = useState({
    fecha: '',
    hora: '',
    cancha: '',
    ubicacion: '',
  });

  const handleInputChange = (event) => {
    setTournamentData({
      ...tournamentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/tournaments', tournamentData)
      .then((response) => {
        console.log(response.data);
        // Aquí puedes manejar la respuesta del servidor después de crear el torneo
        // Por ejemplo, mostrar un mensaje de éxito o redirigir a la página de torneos
      })
      .catch((error) => {
        console.error(error);
        // Aquí puedes manejar el error en caso de que ocurra al crear el torneo
      });
  };

  return (
    <div className="create-tournament"> {/* Agregar la clase "create-tournament" */}
      <h2>Crear Torneo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={tournamentData.fecha}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={tournamentData.hora}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="cancha">Cancha:</label>
          <input
            type="text"
            id="cancha"
            name="cancha"
            value={tournamentData.cancha}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={tournamentData.ubicacion}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Crear Torneo</button>
      </form>
    </div>
  );
};

export default CreateTournament;
