'use strict'

var Evento = require('../models/evento');

var controller = {
  saveEvento: function (req,res) {
    var evento = new Evento();

    var params = req.body;
    evento.id = params.id;
    evento.type = params.type;
    evento.celda = params.celda;
    evento.placa = params.placa;
    evento.fecha = params.fecha;

    evento.save((err, eventoStored) => {
      if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
      if(!eventoStored) return res.status(404).send({message: 'No se ha guardado el evento.'});
      return res.status(200).send({evento: eventoStored});
    });
  },
  updateEvento: function (req, res) {
    var eventoId = req.params.id;
    var update = req.body;
    Evento.findByIdAndUpdate(eventoId, update, {new:true}, (err, eventoUpdated) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!eventoUpdated) return res.status(404).send({message: 'El evento no existe.'});
      return res.status(200).send({
        evento: eventoUpdated
      });
    });
  },
};

module.exports = controller;
