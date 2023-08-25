const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

 module.exports = (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    const {name,price, discount,category,description} = req.body;
    const product = {
        id:products[products.length-1].id+1,
        name: name?.trim(),
        price: +price,
        discount: +discount,
        category,
        description: description?.trim(),
        image: null

    }
    products.push(product)

    fs.writeFileSync(path.join(__dirname,'../../data/products.json'),JSON.stringify(products,null,3))

    res.redirect('/admin')
    
}