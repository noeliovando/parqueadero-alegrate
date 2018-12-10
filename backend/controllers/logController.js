'use strict'

const Log = require('../models/log');

const controller = {
  saveLog: function (req,res) {
    const log = new Log();

    const params = req.body;
    log.id = params.id;
    log.type = params.type;
    log.celdaIni = params.celdaIni;
    log.celdaFin = params.celdaFin;
    log.modelo = params.modelo;
    log.placa = params.placa;
    log.fecha = params.fecha;

    log.save((err, logStored) => {
      if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
      if(!logStored) return res.status(404).send({message: 'No se ha guardado el log.'});
      return res.status(200).send({log: logStored});
    });
  },
  updateLog: function (req, res) {
    const logId = req.params.id;
    const update = req.body;
    Log.findByIdAndUpdate(logId, update, {new:true}, (err, logUpdated) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!logUpdated) return res.status(404).send({message: 'El log no existe.'});
      return res.status(200).send({
        log: logUpdated
      });
    });
  },
  getLogs: function (req, res) {
    Log.find({}).exec((err, logs) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!logs) return res.status(404).send({message: 'Los logs no existen.'});
      return res.status(200).send({logs});
    });
  },
  getLog: function (req, res) {
    const logId = req.params.id;

    if(logId === null) return res.status(404).send({message: 'El log no existe'});
    Log.findById(logId, (err, log) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!log) return res.status(404).send({message: 'El log no existe.'});
      return res.status(200).send({
        log
      });
    });
  },
  getLogPlaca: function (req, res) {
    const logPlaca = req.params.placa;

    if(logPlaca === null) return res.status(404).send({message: 'El log no existe'});
    Log.find({placa: logPlaca}, (err, log) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!log) return res.status(404).send({message: 'El log no existe.'});
      return res.status(200).send({
        log
      });
    });
  },
  deleteLog: function (req, res) {
    const logId = req.params.id;

    if(logId === null) return res.status(404).send({message: 'El log no existe'});
    Log.findByIdAndDelete(logId, (err, logRemoved) => {
      if(err) return res.status(500).send({message: 'No se ha podido borrar el log.'});
      if(!logRemoved) return res.status(404).send({message: 'El log no existe.'});
      return res.status(200).send({
        logRemoved
      });
    });
  },
};

module.exports = controller;
