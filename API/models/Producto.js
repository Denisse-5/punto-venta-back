const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    url: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Producto', productosSchema);