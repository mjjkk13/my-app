const express = require('express');
const cors = require('cors');
const db = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

app.set('port', port);

// Dirección IP V4 de la máquina, consultar con ipconfig
server.listen(port, '192.168.227.109' || 'localhost', function() {
  console.log('Aplicación de NodeJS ' + process.pid + ' inició en el puerto ' + port);
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del Backend');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
}); 