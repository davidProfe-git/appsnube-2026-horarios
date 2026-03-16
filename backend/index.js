const express = require('express')
const aplicacion = express()


aplicacion.get('/mateoyalejandra',(peticion,respuesta)=>{
    respuesta.send('la pareja del año 🚩')
})

aplicacion.listen(4000,()=>{
    console.log("mensaje por consola")
})