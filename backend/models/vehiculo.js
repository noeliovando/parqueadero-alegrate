'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var vehiculoSchema = Schema({
  id: Number,
  placa: String,
  modelo: String,
  celda_ini: String,
  celda_fin: String,
});

module.exports = mongoose.model('Vehiculo',vehiculoSchema);
