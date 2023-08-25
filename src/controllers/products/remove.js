const fs = require('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname,'../../data/products.json')
const products = JSON.parse (fs.readFileSync(productsFilePath, 'utf-8'))


module.exports =(req,res)=> {
   
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));		
		
    const productModify = products.filter(product => product.id !== +req.params.id)
 
    fs.writeFileSync(path.join(__dirname,'../../data/products.json'),JSON.stringify(productModify,null,3))

    return res.redirect('/admin')

}
