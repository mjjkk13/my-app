const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ' ',
  database: 'nodejs_base1'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la BD');
});

module.exports = db;