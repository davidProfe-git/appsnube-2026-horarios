const express = require("express")
const aplicacion = express()


aplicacion.get('/nombre', (peticion, respuesta)=>{
    respuesta.send('peleas')
})

aplicacion.listen(4000,()=>{
    console.log('mensaje por consola')
})