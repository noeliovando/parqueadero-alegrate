'use strict'

const Evento = require('../models/evento');

const controller = {
  saveEvento: function (req,res) {
    const evento = new Evento();

    const params = req.body;
    evento.id = params.id;
    evento.type = params.type;
    evento.celdaIni = params.celdaIni;
    evento.celdaFin = params.celdaFin;
    evento.modelo = params.modelo;
    evento.placa = params.placa;
    evento.fecha = params.fecha;

    evento.save((err, eventoStored) => {
      if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
      if(!eventoStored) return res.status(404).send({message: 'No se ha guardado el evento.'});
      return res.status(200).send({evento: eventoStored});
    });
  },
  updateEvento: function (req, res) {
    const eventoId = req.params.id;
    const update = req.body;
    Evento.findByIdAndUpdate(eventoId, update, {new:true}, (err, eventoUpdated) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!eventoUpdated) return res.status(404).send({message: 'El evento no existe.'});
      return res.status(200).send({
        evento: eventoUpdated
      });
    });
  },
  getEventos: function (req, res) {
    Evento.find({}).exec((err, eventos) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!eventos) return res.status(404).send({message: 'Los eventos no existen.'});
      return res.status(200).send({eventos});
    });
  },
  getEvento: function (req, res) {
    const eventoId = req.params.id;

    if(eventoId === null) return res.status(404).send({message: 'El evento no existe'});
    Evento.findById(eventoId, (err, evento) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!evento) return res.status(404).send({message: 'El evento no existe.'});
      return res.status(200).send({
        evento
      });
    });
  },
  getEventoPlaca: function (req, res) {
    const eventoPlaca = req.params.placa;

    if(eventoPlaca === null) return res.status(404).send({message: 'El evento no existe'});
    Evento.find({placa: eventoPlaca}, (err, evento) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!evento) return res.status(404).send({message: 'El evento no existe.'});
      return res.status(200).send({
        evento
      });
    });
  },
  deleteEvento: function (req, res) {
    const eventoId = req.params.id;

    if(eventoId === null) return res.status(404).send({message: 'El evento no existe'});
    Evento.findByIdAndDelete(eventoId, (err, eventoRemoved) => {
      if(err) return res.status(500).send({message: 'No se ha podido borrar el evento.'});
      if(!eventoRemoved) return res.status(404).send({message: 'El evento no existe.'});
      return res.status(200).send({
        eventoRemoved
      });
    });
  },
};

module.exports = controller;
