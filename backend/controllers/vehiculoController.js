'use strict'

var Vehiculo = require('../models/vehiculo');

var controller = {
  saveVehiculo: function (req,res) {
    var vehiculo = new Vehiculo();

    var params = req.body;
    vehiculo.id = params.id;
    vehiculo.placa = params.placa;
    vehiculo.modelo = params.modelo;
    vehiculo.celda_ini = params.celda_fin;

    return res.status(200).send({
      vehiculo: vehiculo,
      message: "Metodo saveVehiculo"
    })
  }
};

module.exports = controller;
