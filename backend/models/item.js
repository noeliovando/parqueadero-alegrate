'use strict'

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = Schema({
  id: String,
  price: String,
  quantity: String,
  description: String
});

module.exports = mongoose.model('Item',ItemSchema);
