'use strict'

var Celda = require('../models/celda');

var controller = {
  home: function (req,res) {
    return res.status(200).send({
      message: 'Soy la home'
    });
  },
  test: function (req,res) {
    return res.status(200).send({
      message: 'Soy el metodo del controlador celda'
    });
  },
  getCelda: function (req,res) {
    var celdaId = req.params.id;

    if(celdaId == null) return res.status(404).send({message: 'La celda no existe'});
    Celda.findById(celdaId, (err, celda) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!celda) return res.status(404).send({message: 'La celda no existe.'});
      return res.status(200).send({
        celda
      });
    });
  },
  getCeldas: function (req, res) {
    Celda.find({}).exec((err, celdas) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!celdas) return res.status(404).send({message: 'La celda no existe.'});
      return res.status(200).send({celdas});
    });
  },
  updateCeldas: function (req, res) {
    var celdaId = req.params.id;
    var update = req.body;
    Celda.findByIdAndUpdate(celdaId, update, (err, celdaUpdated) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!celdaUpdated) return res.status(404).send({message: 'La celda no existe.'});
      return res.status(200).send({
        celda: celdaUpdated
      });
    });
  },
};

module.exports = controller;
