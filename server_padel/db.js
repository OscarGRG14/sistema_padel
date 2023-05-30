const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',  // Cambia esto si tu base de datos está en un host remoto
  user: 'root',
  password: '1234',
  database: 'torneo_padel'  // Nombre de tu base de datos
});

module.exports = connection;
