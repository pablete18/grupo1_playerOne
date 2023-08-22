const {readJSON} = require ('../../data/products.json')

module.exports = {
    edit: (req,res)=>{
        return res.render('productEdit');            
        }
}