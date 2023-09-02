const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');

module.exports = (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

  const { name, price, estado, category, description } = req.body;
  const productId = +req.params.id;

  const productModify = products.map((product) => {
    if (product.id === productId) {
     
      if (typeof name === 'string') {
        product.name = name.trim();
      }
      product.price = +price;
      product.estado = estado;
      product.category = category;
     
      if (typeof description === 'string') {
        product.description = description.trim();
      }
    }
    return product;
  });

  fs.writeFileSync(
    path.join(__dirname, '../../data/products.json'),
    JSON.stringify(productModify, null, 3),
    'utf-8'
  );

  return res.redirect('/admin');
};