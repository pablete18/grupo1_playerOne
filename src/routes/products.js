const express = require('express');
const {detail, carrito, add, create, edit, update, remove}=require('../controllers/productsController')


const router = express.Router();

/* /products */
router.get('/productDetail/:id', detail);

router.get('/carritocompras', carrito);

router.get('/agregarProducto', add);
router.post('/agregarProducto', upload.single('image'), productAddValidator, create)

router.get('/edit',edit);
/* router.put('/update',update);

router.delete('/remove',remove);  */

module.exports = router;


