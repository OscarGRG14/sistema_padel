const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'containers-us-west-161.railway.app',  // Cambia esto si tu base de datos está en un host remoto
  user: 'root',
  password: '9FQ8UdjjVguaXAbsPoL0',
  port: '6620',
  database: 'torneo_padel'  // Nombre de tu base de datos
});

module.exports = connection;
