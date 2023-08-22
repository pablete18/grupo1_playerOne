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

    module.exports = {
        detail: require('./products/detail'),
        add: require('./products/add'),
        create: require('./products/create'),
        edit: require('./products/edit'),
        update : require('./products/update'),
        remove : require('./products/remove')
      };