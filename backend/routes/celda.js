'use strict'

var express = require('express'); //objeto para express
var CeldaController = require('../controllers/celdaController') //objeto para controlador

var router = express.Router();

router.get('/home', CeldaController.home);
router.post('/test', CeldaController.test);
router.get('/celda/:id', CeldaController.getCelda);
router.get('/celda-etiqueta/:etiqueta', CeldaController.getCeldaEtiqueta);
router.get('/celdas', CeldaController.getCeldas);
router.put('/celda/:id', CeldaController.updateCeldas);

module.exports = router;
