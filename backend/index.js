const express = require("express")
const aplicacion = express()
const controlador = require('./controllers/profesores-controller')

aplicaciones.get('/api', (peticion,respuesta)=>{

});

aplicacion.get('/', (peticion, respuesta)=>{
    respuesta.send('')
})

aplicacion.listen(4000,()=>{
    console.log('mensaje por consola')
})

API