const express = require('express');
const {detail, carrito, add, create, edit, update, remove}=require('../controllers/productsController')


const router = express.Router();

/* /products */
router.get('/productDetail/:id', detail);

router.get('/carritocompras', carrito);

router.get('/agregarProducto', add);
router.post('/agregarProducto', create)

router.get('/edit/:id',edit);
router.put('/update/:id',update);

router.delete('/remove/:id',remove);  

module.exports = router;