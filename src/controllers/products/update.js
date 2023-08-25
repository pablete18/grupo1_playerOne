const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports= (req, res) => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		const {name,price,estado, category,description} = req.body;
		const productModify = products.map((product=>{			
			if(product.id=== +req.params.id){
				product.name= name.trim()
				product.price= +price
				product.estado= estado
				product.category = category
				product.description= description.trim()

			}
			return product
		}))
		fs.writeFileSync(path.join(__dirname,'../../data/products.json'),JSON.stringify(productModify,null,3),'utf-8')
		
		return res.redirect('/index')

} 