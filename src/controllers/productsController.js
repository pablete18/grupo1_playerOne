module.exports = {
    detail : (req, res)=> {
        return res.render('productDetail');
    },
    carrito : (req, res)=> {
        return res.render('carritocompras');
    },
    addProduct : (req, res)=> {
        return res.render('agregarProducto');
    },

    editProducts: (req,res)=>{
        return res.render('productEdit');            
        }
    }

