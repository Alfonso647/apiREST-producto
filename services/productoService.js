// código necesario para el acceso a base de datos

// services/productoService.js
'use strict';
const Producto = require('../models/producto');

//Función obtenerProductoPorId
async function obtenerProductoPorId(id) {
try {
    return await Producto.findById(id);
} catch (err) {
    throw new Error(`Error al obtener el producto: ${err}`);
}
}

//Función crearProducto
async function crearProducto(datosProducto) {
try {
    const producto = new Producto(datosProducto);
    return await producto.save();
} catch (err) {
    throw new Error(`Error al crear el producto: ${err}`);
}
}

//Función actualizarProducto
async function actualizarProducto(id, datosProducto) {
try {
    return await Producto.findByIdAndUpdate(id, datosProducto, { new: true });
} catch (err) {
    throw new Error(`Error al actualizar el producto: ${err}`);
}
}

// Función obtenertodosLosProductos
async function obtenerTodosProductos() {
  try {
    return await Producto.find();
} catch (err) {
    throw new Error(`Error al obtener los productos: ${err}`);
}
}

// Función eliminarProductoPorId
async function eliminarProductoPorId(id) {
  try {
    return await Producto.findByIdAndDelete(id);
} catch (err) {
    throw new Error(`Error al eliminar el producto: ${err}`);
}
}



// Exportamos las funciones
module.exports = {
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  obtenerTodosProductos,
  eliminarProductoPorId
};

