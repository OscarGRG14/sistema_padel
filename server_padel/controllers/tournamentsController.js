const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para obtener información de un torneo por ID
router.get('/:id', (req, res) => {
  const tournamentId = req.params.id;

  const query = 'SELECT * FROM tournaments WHERE id = ?';
  db.query(query, [tournamentId], (error, results) => {
    if (error) {
      console.error('Error al obtener el torneo de la base de datos:', error);
      res.status(500).json({ error: 'Error al obtener el torneo de la base de datos' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Torneo no encontrado' });
      return;
    }

    const tournament = results[0];
    res.json(tournament);
  });
});

// Ruta para crear un nuevo torneo
router.post('/', (req, res) => {
  const newTournament = req.body;

  const query = 'INSERT INTO tournaments SET ?';
  db.query(query, newTournament, (error, results) => {
    if (error) {
      console.error('Error al crear el nuevo torneo en la base de datos:', error);
      res.status(500).json({ error: 'Error al crear el nuevo torneo en la base de datos' });
      return;
    }

    const tournamentId = results.insertId;
    res.json({ id: tournamentId });
  });
});

// Ruta para editar un torneo existente
router.put('/:id', (req, res) => {
  const tournamentId = req.params.id;
  const updatedTournament = req.body;

  const query = 'UPDATE tournaments SET ? WHERE id = ?';
  db.query(query, [updatedTournament, tournamentId], (error) => {
    if (error) {
      console.error('Error al editar el torneo en la base de datos:', error);
      res.status(500).json({ error: 'Error al editar el torneo en la base de datos' });
      return;
    }

    res.json({ message: 'Torneo actualizado exitosamente' });
  });
});

// Ruta para eliminar un torneo
router.delete('/:id', (req, res) => {
  const tournamentId = req.params.id;

  const query = 'DELETE FROM tournaments WHERE id = ?';
  db.query(query, [tournamentId], (error) => {
    if (error) {
      console.error('Error al eliminar el torneo de la base de datos:', error);
      res.status(500).json({ error: 'Error al eliminar el torneo de la base de datos' });
      return;
    }

    res.json({ message: 'Torneo eliminado exitosamente' });
  });
});

// Ruta para obtener todos los torneos
router.get('/', (req, res) => {
  const query = 'SELECT * FROM tournaments';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los torneos de la base de datos:', error);
      res.status(500).json({ error: 'Error al obtener los torneos de la base de datos' });
      return;
    }

    res.json(results);
  });
});

module.exports = router;
