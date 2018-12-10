'use strict'

const express = require('express'); //objeto para express
const LogController = require('../controllers/logController.js') //objeto para controlador

const router = express.Router();

router.post('/update-log/:id',LogController.updateLog);
router.post('/save-log',LogController.saveLog);
router.post('/logs',LogController.getLogs);
router.get('/log/:id',LogController.getLog);
router.get('/log-placa/:placa',LogController.getLogPlaca);
router.delete('/log/:id',LogController.deleteLog);

module.exports = router;
