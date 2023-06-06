import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./TournamentList.css";

const TournamentList = () => {
  const [tournaments, setTournaments] = useState([]);
  const [editingTournament, setEditingTournament] = useState(null);
  const [updatedTournamentData, setUpdatedTournamentData] = useState({
    fecha: "",
    hora: "",
    cancha: "",
    ubicacion: "",
  });

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = () => {
    axios
      .get("http://localhost:5000/tournaments")
      .then((response) => {
        setTournaments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (tournamentId) => {
    axios
      .delete(`http://localhost:5000/tournaments/${tournamentId}`)
      .then((response) => {
        console.log(response.data);
        setTournaments(
          tournaments.filter((tournament) => tournament.id !== tournamentId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (tournamentId) => {
    const tournamentToEdit = tournaments.find(
      (tournament) => tournament.id === tournamentId
    );
    setEditingTournament(tournamentId);
    setUpdatedTournamentData({
      fecha: tournamentToEdit.fecha,
      hora: tournamentToEdit.hora,
      cancha: tournamentToEdit.cancha,
      ubicacion: tournamentToEdit.ubicacion,
    });
  };

  const handleInputChange = (event) => {
    setUpdatedTournamentData({
      ...updatedTournamentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = (tournamentId) => {
    axios
      .put(
        `http://localhost:5000/tournaments/${tournamentId}`,
        updatedTournamentData
      )
      .then((response) => {
        console.log(response.data);
        setEditingTournament(null);
        setUpdatedTournamentData({
          fecha: "",
          hora: "",
          cancha: "",
          ubicacion: "",
        });
        fetchTournaments(); // Actualizar la lista de torneos después de editar
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const subscribeToTournamentChanges = () => {
    const eventSource = new EventSource(
      "http://localhost:5000/tournaments/subscribe"
    );

    eventSource.addEventListener("tournamentCreated", (event) => {
      const newTournament = JSON.parse(event.data);
      setTournaments((prevTournaments) => [...prevTournaments, newTournament]);
    });

    eventSource.addEventListener("tournamentDeleted", (event) => {
      const deletedTournamentId = JSON.parse(event.data);
      setTournaments((prevTournaments) =>
        prevTournaments.filter(
          (tournament) => tournament.id !== deletedTournamentId
        )
      );
    });

    eventSource.addEventListener("tournamentUpdated", (event) => {
      const updatedTournament = JSON.parse(event.data);
      setTournaments((prevTournaments) =>
        prevTournaments.map((tournament) =>
          tournament.id === updatedTournament.id
            ? updatedTournament
            : tournament
        )
      );
    });
  };

  useEffect(() => {
    subscribeToTournamentChanges();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="tournament-list"
    >
      <h2>Lista de Torneos</h2>
      <div className="card-container">
        {tournaments.map((tournament) => (
          <div className="card" key={tournament.id}>
            <div className="card-content">
              {editingTournament === tournament.id ? (
                <>
                  <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      value={updatedTournamentData.fecha}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="hora">Hora:</label>
                    <input
                      type="time"
                      id="hora"
                      name="hora"
                      value={updatedTournamentData.hora}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="cancha">Cancha:</label>
                    <input
                      type="text"
                      id="cancha"
                      name="cancha"
                      value={updatedTournamentData.cancha}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="ubicacion">Ubicación:</label>
                    <input
                      type="text"
                      id="ubicacion"
                      name="ubicacion"
                      value={updatedTournamentData.ubicacion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="card-buttons">
                    <button
                      className="btn-save"
                      onClick={() => handleUpdate(tournament.id)}
                    >
                      Guardar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    <strong>Fecha:</strong> {tournament.fecha}
                  </p>
                  <p>
                    <strong>Hora:</strong> {tournament.hora}
                  </p>
                  <p>
                    <strong>Cancha:</strong> {tournament.cancha}
                  </p>
                  <p>
                    <strong>Ubicación:</strong> {tournament.ubicacion}
                  </p>
                  <div className="card-buttons">
                    <button
                      className="btn-remove"
                      onClick={() => handleDelete(tournament.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(tournament.id)}
                    >
                      Editar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TournamentList;
