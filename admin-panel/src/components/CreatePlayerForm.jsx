import React, { useState } from 'react';
import axios from 'axios';
import './CreatePlayerForm.css'; // Agrega la referencia al archivo CSS

const CreatePlayerForm = () => {
    const [playerData, setPlayerData] = useState({
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

    const handleInputChange = (event) => {
        setPlayerData({
            ...playerData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:5000/users', playerData) // Cambia la URL según la ruta de tu servidor
            .then((response) => {
                console.log(response.data);
                // Realiza acciones adicionales según sea necesario
            })
            .catch((error) => {
                console.error(error);
                // Manejo de errores
            });
    };

    return (
        <form className="create-player-form" onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={playerData.nombre}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Apellido:
                <input
                    type="text"
                    name="apellido"
                    value={playerData.apellido}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Sexo:
                <input
                    type="text"
                    name="sexo"
                    value={playerData.sexo}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Fecha de Nacimiento:
                <input
                    type="date"
                    name="fechaNacimiento"
                    value={playerData.fechaNacimiento}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Nacionalidad:
                <input
                    type="text"
                    name="nacionalidad"
                    value={playerData.nacionalidad}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                C.I. / DNI / CPF:
                <input
                    type="text"
                    name="documento"
                    value={playerData.documento}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Rango:
                <input
                    type="number"
                    name="rango"
                    value={playerData.rango}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Nivel:
                <input
                    type="number"
                    name="nivel"
                    value={playerData.nivel}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Administrador:
                <input
                    type="checkbox"
                    name="esAdministrador"
                    checked={playerData.esAdministrador}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Partidas Jugadas:
                <input
                    type="number"
                    name="partidas_jugadas"
                    value={playerData.partidas_jugadas}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Torneos Jugados:
                <input
                    type="number"
                    name="torneos_jugados"
                    value={playerData.torneos_jugados}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Torneos No Ganados:
                <input
                    type="number"
                    name="torneos_no_ganados"
                    value={playerData.torneos_no_ganados}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Torneos Ganados:
                <input
                    type="number"
                    name="torneos_ganados"
                    value={playerData.torneos_ganados}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <button type="submit">Crear jugador</button>
        </form>
    );
};

export default CreatePlayerForm;

