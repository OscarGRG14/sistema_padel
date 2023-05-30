const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');
const usersController = require('./controllers/usersController');
const tournamentsController = require('./controllers/tournamentsController');

// Configuración de Morgan para imprimir logs de las solicitudes HTTP en la consola
app.use(morgan('dev'));

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Puerto en el que se ejecutará el servidor
const port = 5000;

// Configuracion de la base de datos
db.connect((err) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

// Configuración de body-parser para leer datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a tu sistema de torneos de pádel!');
});

// Rutas para el sistema
app.use('/users', usersController); // Usa el controlador de usuarios
app.use('/tournaments', tournamentsController); // Usa el controlador de torneos

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
