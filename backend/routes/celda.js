'use strict'

var express = require('express'); //objeto para express
var CeldaController = require('../controllers/celdaController') //objeto para controlador

var router = express.Router();

router.get('/home', CeldaController.home);
router.post('/test', CeldaController.test);
router.post('/celda/:id?', CeldaController.getCelda);
router.get('/celdas', CeldaController.getCeldas);
router.put('/celda/:id', CeldaController.updateCeldas);

module.exports = router;
