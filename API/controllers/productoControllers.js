const Producto = require('../models/Producto');

exports.nuevoProducto = async(req, res, next) => {
    const producto = new Producto(req.body);
    //console.log(req.body);
    try {
        await producto.save();
        res.json({ mensaje: 'El producto ha sido agregado correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerProductos = async(req, res, next) => {
    try {
        const productos = await Producto.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerProducto = async(req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarProducto = async(req, res, next) => {
    try {
        const producto = await Producto.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarProducto = async(req, res, next) => {
    try {
        await Producto.findOneAndDelete({ _id: req.params.id });
        res.json({ mensaje: 'El producto se ha eliminado de la base de datos' });
    } catch (error) {
        console.log(error);
        next();
    }
}