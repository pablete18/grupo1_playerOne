module.exports = {
    detail : (req, res)=> {
        return res.render('productDetail');
    },
    carrito : (req, res)=> {
        return res.render('carritocompras');
    },
    editProducts: (req,res)=>{
        return res.render('productEdit');
            
        }
    }

