const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para obtener información de un usuario por ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Error al obtener el usuario de la base de datos:', error);
      res.status(500).json({ error: 'Error al obtener el usuario de la base de datos' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    const user = results[0];
    res.json(user);
  });
});

// Ruta para crear un nuevo usuario
router.post('/', (req, res) => {
  const newUser = req.body;

  const query = 'INSERT INTO users SET ?';
  db.query(query, newUser, (error, results) => {
    if (error) {
      console.error('Error al crear el nuevo usuario en la base de datos:', error);
      res.status(500).json({ error: 'Error al crear el nuevo usuario en la base de datos' });
      return;
    }

    const userId = results.insertId;
    res.json({ id: userId });
  });
});

// Ruta para editar un usuario existente
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  const query = 'UPDATE users SET ? WHERE id = ?';
  db.query(query, [updatedUser, userId], (error) => {
    if (error) {
      console.error('Error al editar el usuario en la base de datos:', error);
      res.status(500).json({ error: 'Error al editar el usuario en la base de datos' });
      return;
    }

    res.json({ message: 'Usuario actualizado exitosamente' });
  });
});

// Ruta para eliminar un usuario
router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [userId], (error) => {
    if (error) {
      console.error('Error al eliminar el usuario de la base de datos:', error);
      res.status(500).json({ error: 'Error al eliminar el usuario de la base de datos' });
      return;
    }

    res.json({ message: 'Usuario eliminado exitosamente' });
  });
});

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios de la base de datos:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios de la base de datos' });
      return;
    }

    res.json(results);
  });
});

module.exports = router;
