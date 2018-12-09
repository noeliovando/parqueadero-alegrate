'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var EventoSchema = Schema({
  id: String,
  type: String,
  celdaIni: String,
  celdaFin:String,
  placa: String,
  modelo: String,
  fecha: String
});

module.exports = mongoose.model('Evento',EventoSchema);
