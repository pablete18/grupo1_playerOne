const express = require('express');
const { detail, carrito } = require('../controllers/productsController');

const router = express.Router();

/* /products */
router.get('/productDetail', detail);
router.get('/carritocompras', carrito);


module.exports = router;
