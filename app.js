const path = require ('path')
const express = require ('express')
const app = express ()


const PORT = 3030

/* RUTA ESTÁTICA  */
app.use(express.static('public'))


/* RUTAS  */
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/header', (req, res)=> res.sendFile(path.join(__dirname, 'views','partial', 'header.html')))
app.get('/footer', (req, res)=> res.sendFile(path.join(__dirname, 'views','partial', 'footer.html')))
app.get('/login', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'login.html')))
app.get('/registro', (req, res)=> res.sendFile(path.join(__dirname, 'views','register.html')))
app.get('/carritocompras', (req, res) => res.sendFile(path.join(__dirname, "views","carritocompras.html")))
app.get('/detalleProducto', (req, res) => res.sendFile(path.join(__dirname, "views","productDetail.html")))
app.get('/404', (req, res) => res.sendFile(path.join(__dirname, "views", "404.html")) )
app.get('/Producto', (req, res) => res.sendFile(path.join(__dirname, "views", "agregarProducto.html")) )




/* LEVANTA SERVIDOR  */
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))
