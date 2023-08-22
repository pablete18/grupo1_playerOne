 const {readJSON}= require ('../../data/products.json') 

module.exports = {
    detail : (req, res)=> {
        return res.render('productDetail');
    },
};