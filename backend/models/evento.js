'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var EventoSchema = Schema({
  id: Number,
  type: String,
  celda: String,
  placa: String,
  fecha: Date
});

module.exports = mongoose.model('Evento',EventoSchema);
