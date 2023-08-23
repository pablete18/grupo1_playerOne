const fs = require('fs');
const path = require ('path');

const productsFilePath = path.join(__dirname,'../data/products.json')
const products = JSON.parse (fs.readFileSync(productsFilePath, 'utf-8'))



module.exports = {
    index : (req, res) => {
        return res.render('index',{
            products
        });
    }/* ,
    search : (req,res)=>{
        return
    } */
}