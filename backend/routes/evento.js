'use strict'

const express = require('express'); //objeto para express
const EventoController = require('../controllers/eventoController.js') //objeto para controlador

const router = express.Router();

router.post('/update-evento/:id',EventoController.updateEvento);
router.post('/entrada-vehiculo',EventoController.saveEvento);
router.post('/eventos',EventoController.getEventos);
router.get('/evento/:id',EventoController.getEvento);
router.get('/evento-placa/:placa',EventoController.getEventoPlaca);
router.delete('/evento/:id',EventoController.deleteEvento);

module.exports = router;
