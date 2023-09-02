const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');

module.exports = (req, res) => {
    const id = req.params.id;
    fs.readFile(productsFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error interno del servidor');
        }

        const products = JSON.parse(data);
        const productIndex = products.findIndex((product) => product.id === +id);

        if (productIndex === -1) {
            return res.status(404).send('Producto no encontrado');
        }

        const updatedProduct = {
            id: products[productIndex].id,
            name: req.body.name || products[productIndex].name,
            estado: req.body.estado || products[productIndex].estado,
            price: req.body.price || products[productIndex].price,
            discount: req.body.discount || products[productIndex].discount,
            description: req.body.description || products[productIndex].description,
        
            image: req.file ? req.file.filename : products[productIndex].image,
        };

        products[productIndex] = updatedProduct;

       
        fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al guardar el producto');
            }

            return res.redirect('/admin'); 
        });
    });
};


