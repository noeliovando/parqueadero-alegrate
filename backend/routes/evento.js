'use strict'

var express = require('express'); //objeto para express
var EventoController = require('../controllers/eventoController') //objeto para controlador

var router = express.Router();

router.post('/update-evento/:id',EventoController.updateEvento);
router.post('/entrada-vehiculo',EventoController.saveEvento);
router.post('/eventos',EventoController.getEventos);

module.exports = router;
