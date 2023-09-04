const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = (req, res) => {
    const { name, price, discount, description } = req.body;
    
    const product = {
        id: products.length + 1, 
        name: name?.trim(),
        price: parseFloat(price), 
        discount: parseFloat(discount), 
        description: description?.trim(),
        image: null
    };

   
    products.push(product);

    
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3));

    res.redirect('/admin');
}