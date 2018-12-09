'use strict'

const Item = require('../models/item');

const controller = {
  saveItem: function (req,res) {
    const item = new Item();

    const params = req.body;
    item.id = params.id;
    item.price = params.price;
    item.quantity = params.quantity;
    item.description = params.description;

    item.save((err, itemStored) => {
      if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
      if(!itemStored) return res.status(404).send({message: 'No se ha guardado el item.'});
      return res.status(200).send({item: itemStored});
    });
  },
  updateItem: function (req, res) {
    const itemId = req.params.id;
    const update = req.body;
    Item.findByIdAndUpdate(itemId, update, {new:true}, (err, itemUpdated) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!itemUpdated) return res.status(404).send({message: 'El item no existe.'});
      return res.status(200).send({
        item: itemUpdated
      });
    });
  },
  getItems: function (req, res) {
    Item.find({}).exec((err, items) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!items) return res.status(404).send({message: 'Los items no existen.'});
      return res.status(200).send({items});
    });
  },
  getItem: function (req, res) {
    const itemId = req.params.id;

    if(itemId === null) return res.status(404).send({message: 'El item no existe'});
    Item.findById(itemId, (err, item) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
      if(!item) return res.status(404).send({message: 'El item no existe.'});
      return res.status(200).send({
        item
      });
    });
  },
};

module.exports = controller;
