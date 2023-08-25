const fs = require('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname,'../../data/products.json')
const products = JSON.parse (fs.readFileSync(productsFilePath, 'utf-8'))


module.exports =  (req, res) => {
    const products = JSON.parse (fs.readFileSync(productsFilePath, 'utf-8'));
    const id = req.params.id;
    const product = products.find((product) => product.id ===+id);

    return res.render("productEdit", {
        product
    
    })
  }