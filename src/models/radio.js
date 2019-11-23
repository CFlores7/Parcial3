const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RadioSchema = new Schema({
    nombre: String,
    eslogan: String,
    canal: String,
    modular: String
});

module. exports = mongoose.model('radio', RadioSchema);