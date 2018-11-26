'use strict'

var express = require('express'); //objeto para express
var VehiculoController = require('../controllers/vehiculoController') //objeto para controlador

var router = express.Router();

router.post('/save-vehiculo',VehiculoController.saveVehiculo)

module.exports = router;
