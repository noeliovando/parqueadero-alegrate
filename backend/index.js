'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/parqueadero')
  .then(() => {
    console.log("Conexión a la base de datos extablecida con exito...");

    //Creación del servidor
    app.listen(port, () => {
      console.log("servidor corriendo correctamente en la url: localhost:3700");
    });
  })
  .catch(err => console.log(err));
