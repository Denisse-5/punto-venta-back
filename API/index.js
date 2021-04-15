const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// nombre de la aplicación como app
const app = express();
// cors
app.use(cors());
// Conexión a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tienda', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
// Guardar la petición en una variable llamada req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Habilitar las rutas de la aplicación
app.use('/', routes());

app.listen(4000, () => {
    console.log('Servidor en línea')
});