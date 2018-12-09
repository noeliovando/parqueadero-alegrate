'use strict'

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const StampSchema = Schema({
  id: String,
  generateStamp: Boolean
});

module.exports = mongoose.model('Stamp',StampSchema);
