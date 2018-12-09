'use strict'

const express = require('express'); //objeto para express
const ItemController = require('../controllers/itemController') //objeto para controlador

const router = express.Router();

router.post('/update-item/:id',ItemController.updateItem);
router.post('/save-item',ItemController.saveItem);
router.post('/items',ItemController.getItems);
router.get('/item/:id',ItemController.getItem);

module.exports = router;
