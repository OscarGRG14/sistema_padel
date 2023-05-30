import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlayersList.css'; // Importa el archivo CSS de estilos

const PlayersList = () => {
  const [players, setPlayers] = useState([]);
  const [editingPlayerId, setEditingPlayerId] = useState(null);
  const [editedPlayerData, setEditedPlayerData] = useState({
    nombre: '',
    apellido: '',
    sexo: '',
    fechaNacimiento: '',
    nacionalidad: '',
    documento: '',
    rango: 0,
    nivel: 0,
    esAdministrador: false,
    partidas_jugadas: 0,
    torneos_jugados: 0,
    torneos_no_ganados: 0,
    torneos_ganados: 0,
  });

  useEffect(() => {
    // Función para obtener los jugadores
    const fetchPlayers = () => {
      axios
        .get('http://localhost:5000/users')
        .then((response) => {
          setPlayers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // Obtener los jugadores inicialmente
    fetchPlayers();

    // Establecer un intervalo para obtener los jugadores cada cierto tiempo (por ejemplo, cada 5 segundos)
    const interval = setInterval(fetchPlayers, 5000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  const calculateAge = (birthdate) => {
    const birthdateObj = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birthdateObj.getFullYear();

    // Verificar si el cumpleaños ya pasó en el año actual
    if (
      now.getMonth() < birthdateObj.getMonth() ||
      (now.getMonth() === birthdateObj.getMonth() &&
        now.getDate() < birthdateObj.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleDeletePlayer = (playerId) => {
    axios
      .delete(`http://localhost:5000/users/${playerId}`)
      .then((response) => {
        // Actualizar la lista de jugadores después de eliminar uno
        setPlayers(players.filter((player) => player.id !== playerId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditPlayer = (playerId) => {
    // Buscar al jugador por su ID
    const playerToEdit = players.find((player) => player.id === playerId);

    // Actualizar el estado de la edición con los datos del jugador seleccionado
    setEditingPlayerId(playerId);
    setEditedPlayerData(playerToEdit);
  };

  const handleInputChange = (event) => {
    setEditedPlayerData({
      ...editedPlayerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveEdit = () => {
    axios
      .put(
        `http://localhost:5000/users/${editingPlayerId}`,
        editedPlayerData
      )
      .then((response) => {
        // Actualizar la lista de jugadores después de editar uno
        setPlayers(
          players.map((player) =>
            player.id === editingPlayerId ? editedPlayerData : player
          )
        );

        // Restablecer los valores de edición
        setEditingPlayerId(null);
        setEditedPlayerData({
          nombre: '',
          apellido: '',
          sexo: '',
          fechaNacimiento: '',
          nacionalidad: '',
          documento: '',
          rango: 0,
          nivel: 0,
          esAdministrador: false,
          partidas_jugadas: 0,
          torneos_jugados: 0,
          torneos_no_ganados: 0,
          torneos_ganados: 0,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="players-list">
      <h2>Listado de Jugadores</h2>
      <div className="card-container">
        {players.map((player) => (
          <div className="card" key={player.id}>
            <div className="card-content">
              {editingPlayerId === player.id ? (
                <>
                  <h3>
                    <input
                      type="text"
                      name="nombre"
                      value={editedPlayerData.nombre}
                      onChange={handleInputChange}
                    />{' '}
                    <input
                      type="text"
                      name="apellido"
                      value={editedPlayerData.apellido}
                      onChange={handleInputChange}
                    />
                  </h3>
                  <p>
                    <strong>Sexo:</strong>{' '}
                    <input
                      type="text"
                      name="sexo"
                      value={editedPlayerData.sexo}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Fecha de Nacimiento:</strong>{' '}
                    <input
                      type="date"
                      name="fechaNacimiento"
                      value={editedPlayerData.fechaNacimiento}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Edad:</strong>{' '}
                    {calculateAge(editedPlayerData.fechaNacimiento)}
                  </p>
                  <p>
                    <strong>Nacionalidad:</strong>{' '}
                    <input
                      type="text"
                      name="nacionalidad"
                      value={editedPlayerData.nacionalidad}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Documento:</strong>{' '}
                    <input
                      type="text"
                      name="documento"
                      value={editedPlayerData.documento}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Rango:</strong>{' '}
                    <input
                      type="number"
                      name="rango"
                      value={editedPlayerData.rango}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Nivel:</strong>{' '}
                    <input
                      type="number"
                      name="nivel"
                      value={editedPlayerData.nivel}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Es Administrador:</strong>{' '}
                    <input
                      type="checkbox"
                      name="esAdministrador"
                      checked={editedPlayerData.esAdministrador}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Partidas Jugadas:</strong>{' '}
                    <input
                      type="number"
                      name="partidas_jugadas"
                      value={editedPlayerData.partidas_jugadas}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Torneos Jugados:</strong>{' '}
                    <input
                      type="number"
                      name="torneos_jugados"
                      value={editedPlayerData.torneos_jugados}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Torneos No Ganados:</strong>{' '}
                    <input
                      type="number"
                      name="torneos_no_ganados"
                      value={editedPlayerData.torneos_no_ganados}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Torneos Ganados:</strong>{' '}
                    <input
                      type="number"
                      name="torneos_ganados"
                      value={editedPlayerData.torneos_ganados}
                      onChange={handleInputChange}
                    />
                  </p>
                  <button className="save-button" onClick={handleSaveEdit}>Guardar</button>
                  <button className="cancel-button" onClick={() => setEditingPlayerId(null)}>Cancelar</button>
                </>
              ) : (
                <>
                  <h3>
                    {player.nombre} {player.apellido}
                  </h3>
                  <p>
                    <strong>Sexo:</strong> {player.sexo}
                  </p>
                  <p>
                    <strong>Fecha de Nacimiento:</strong>{' '}
                    {player.fechaNacimiento}
                  </p>
                  <p>
                    <strong>Edad:</strong> {calculateAge(player.fechaNacimiento)}
                  </p>
                  <p>
                    <strong>Nacionalidad:</strong> {player.nacionalidad}
                  </p>
                  <p>
                    <strong>Documento:</strong> {player.documento}
                  </p>
                  <p>
                    <strong>Rango:</strong> {player.rango}
                  </p>
                  <p>
                    <strong>Nivel:</strong> {player.nivel}
                  </p>
                  <p>
                    <strong>Es Administrador:</strong>{' '}
                    {player.esAdministrador ? 'Sí' : 'No'}
                  </p>
                  <p>
                    <strong>Partidas Jugadas:</strong> {player.partidas_jugadas}
                  </p>
                  <p>
                    <strong>Torneos Jugados:</strong> {player.torneos_jugados}
                  </p>
                  <p>
                    <strong>Torneos No Ganados:</strong>{' '}
                    {player.torneos_no_ganados}
                  </p>
                  <p>
                    <strong>Torneos Ganados:</strong> {player.torneos_ganados}
                  </p>
                  <div className="button-container">
                    <button className="edit-button" onClick={() => handleEditPlayer(player.id)}>Editar</button>
                    <button className="delete-button" onClick={() => handleDeletePlayer(player.id)}>Eliminar</button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
