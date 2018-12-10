'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de rutas
var evento_routes = require('./routes/evento');
var celda_routes = require('./routes/celda');
var log_routes = require('./routes/log');

//moddlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//rutas
app.use('/api',evento_routes);
app.use('/api',celda_routes);
app.use('/api',log_routes);

//exportar
module.exports = app;
