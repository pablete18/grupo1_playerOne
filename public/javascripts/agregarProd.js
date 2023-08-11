
// Variable para almacenar los productos (simulado en este ejemplo)
let products = [];

// Función para guardar un nuevo producto o editar uno existente
function saveProduct() {
  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;
  const productImage = document.getElementById('productImage').value;
  const productCategory = document.getElementById('productCategory').value;
  const productColors = document.getElementById('productColors').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);

  // Validar que todos los campos estén completos
  if (!productName || !productDescription || !productImage || !productCategory || !productColors || isNaN(productPrice)) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Crear objeto del producto
  const product = {
    name: productName,
    description: productDescription,
    image: productImage,
    category: productCategory,
    colors: productColors,
    price: productPrice,
  };

  // Agregar o editar el producto en la lista de productos
  const productIndex = products.findIndex(p => p.name === productName);
  if (productIndex !== -1) {
    products[productIndex] = product;
  } else {
    products.push(product);
  }

  // Limpieza de campos después de guardar
  document.getElementById('productName').value = '';
  document.getElementById('productDescription').value = '';
  document.getElementById('productImage').value = '';
  document.getElementById('productCategory').value = '';
  document.getElementById('productColors').value = '';
  document.getElementById('productPrice').value = '';

  // Mostrar mensaje de éxito
  alert('Producto guardado con éxito.');
}