//parte del código que teníamos en el index que gestionaba las solicitudes http 
//y llama al servicio para obtener las respuestas

// controllers/productoController.js
'use strict';
const productoService = require('../services/productoService');

//Función obtenerProductoPorIp
async function obtenerProductoPorId (req, res) {
let productoId = req.params.id;
try {
const producto = await productoService.obtenerProductoPorId(productoId);
if (!producto) {
return res.status(404).send({ mensaje: 'El producto no existe' });
}
res.status(200).send({ producto });
} catch (err) {
res.status(500).send({ mensaje: `Error al realizar la petición: ${err.message}` });
}
};

//Función crearProducto
async function crearProducto (req, res) {
console.log('POST /api/producto');
console.log(req.body);
try {
const productoStored = await productoService.crearProducto(req.body);
res.status(200).send({ producto: productoStored });
} catch (err) {
res.status(500).send({ mensaje: `Error al salvar en la base de datos: ${err.message}` });
}
};

//Función actualizarProducto
async function actualizarProducto(req, res) {
console.log('PUT /api/producto/:id');
console.log(req.body);
let productoId = req.params.id;
let update = req.body;
try {
const productoUpdated = await productoService.actualizarProducto(productoId, update);
if (!productoUpdated) {
return res.status(404).send({ mensaje: 'El producto no existe' });
}
res.status(200).send({ producto: productoUpdated });
} catch (err) {
    res.status(500).send({ mensaje: `Error al actualizar el producto: ${err.message}` });
}
};

//Función obtenerTodosProductos
async function obtenerTodosProductos(req, res) {
  try {
    const productos = await productoService.obtenerTodosProductos();
    res.status(200).send({ productos });
} catch (err) {
    res.status(500).send({ mensaje: `Error al obtener los productos: ${err.message}` });
}
}

//Función eliminarProductoPorId
async function eliminarProductoPorId(req, res) {
  const productoId = req.params.id;
  try {
    const productoEliminado = await productoService.eliminarProductoPorId(productoId);
    if (!productoEliminado) {
      return res.status(404).send({ mensaje: 'El producto no existe' });
    }
    res.status(200).send({ mensaje: 'Producto eliminado correctamente', producto: productoEliminado });
} catch (err) {
    res.status(500).send({ mensaje: `Error al eliminar el producto: ${err.message}` });
}
}


//Exportamos las funciones
module.exports = {
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  obtenerTodosProductos,
  eliminarProductoPorId
};

