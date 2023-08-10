const express = require('express');
const { detail, carrito, addProduct,editProducts} = require('../controllers/productsController');


const router = express.Router();

/* /products */
router.get('/productDetail', detail);
router.get('/carritocompras', carrito);
router.get('/agregarProducto', addProduct);
router.get('/edit',editProducts);

module.exports = router;