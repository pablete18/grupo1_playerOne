const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports= (req, res) => {
		const {name,precio, category,description} = req.body;
		const productModify = products.map((product=>{
			
			if(product.id=== +req.params.id){
				product.name= name.trim()
				product.precio= +precio
				product.especificaciones= especificaciones.trim()
				product.category = category
				product.description= description.trim()

			}
			return product
		}))
		fs.writeFileSync(path.join(__dirname,'../data/productsDataBase.json'),JSON.stringify(productModify,null,3),'utf-8')
		
		return res.redirect('/users')

} 