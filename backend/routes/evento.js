'use strict'

var express = require('express'); //objeto para express
var EventoController = require('../controllers/eventoController') //objeto para controlador

var router = express.Router();

router.post('/update-evento/:id',EventoController.updateEvento);

module.exports = router;
