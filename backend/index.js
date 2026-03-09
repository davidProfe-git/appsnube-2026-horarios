const express = require('express');
const aplicacion = express();
aplicacion.get('/mateo', (req, res) =>{
    res.send('Hello, World!');
})
aplicacion.listen(3000, () => {
console.log('Servidor iniciado en el puerto 3000')
})
