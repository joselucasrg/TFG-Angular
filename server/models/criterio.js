
const mongoose = require('mongoose');
const { Schema } = mongoose;

let Criterio = new Schema({
    name: String,
    valor: Number,
    sub_name: Array,
    sub_valor: Array
})
      
module.exports = mongoose.model('Criterio', Criterio);    