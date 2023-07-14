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
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "views", "404.html")) )


/* LEVANTA SERVIDOR  */
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))