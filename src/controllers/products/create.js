const {existsSync, unlinkSync} = require('fs');
const {validationResult} = require('express-validator');
const { readJSON, writeJSON } = require("../../data");
const Product = require("../../data/Product");

module.exports = (req, res) => {
    
    const errors = validationResult(req);

    if(errors.isEmpty()){

      const products = readJSON("products.json");
      
      const data = {
        ...req.body,
        image : req.file ? req.file.filename : null
      }
  
      let newProduct = new Product(data);
      products.push(newProduct);
  
      writeJSON(products, 'products.json');
  
      return res.redirect('/admin');

    }else {

      if(req.file){
        existsSync('./public/images/products' + req.file.filename) && unlinkSync('./public/images/products' + req.file.filename)
      }

      

     return res.render("productAdd", {
     
        errors : errors.mapped(),
        old : req.body
      });
    }


  
  }