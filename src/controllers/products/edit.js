const fs = require('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname,'../../data/products.json')
const products = JSON.parse (fs.readFileSync(productsFilePath, 'utf-8'))


module.exports =  (req, res) => {

    const products = readJSON("products.json");
    const users = readJSON("brands.json");

    const id = req.params.id;
    const product = products.find((product) => product.id === id);

    return res.render("productEdit", {
        ...product
    /*     brands: brands.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0 */
    })
  }