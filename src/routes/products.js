const express = require('express');
const { detail, carrito, addProduct } = require('../controllers/productsController');

const router = express.Router();

/* /products */
router.get('/productDetail', detail);
router.get('/carritocompras', carrito);
router.get('/agregarProducto', addProduct);

module.exports = router;