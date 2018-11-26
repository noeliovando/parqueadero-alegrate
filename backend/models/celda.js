'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var CeldaSchema = Schema({
  etiqueta: String,
  posicion: String,
  estatus: String
});

module.exports = mongoose.model('Celda',CeldaSchema);
