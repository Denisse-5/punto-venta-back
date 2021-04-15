const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');
module.exports = function() {
    router.post('/productos',
        productoController.nuevoProducto
    );

    router.get('/productos',
        productoController.obtenerProductos
    );

    router.get('/productos/:id',
        productoController.obtenerProducto
    )

    router.put('/productos/:id',
        productoController.actualizarProducto
    )

    router.delete('/productos/:id',
        productoController.eliminarProducto
    )

    return router;
}