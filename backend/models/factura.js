'use strict'

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const item = new Item();
const stamp = new Stamp();

const FacturaSchema = Schema({
  id: String,
  date: String,
  dueDate: String,
  client: number,
  items: [item],
  stamps: stamp
});

module.exports = mongoose.model('Factura',FacturaSchema);
