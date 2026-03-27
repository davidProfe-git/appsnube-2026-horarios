const express = require('express')
const aplicacion = express()
const profesorControlador = require('./controllers/profesoresController')
const horariosControlador = require('./controllers/horariosController')
//Router
aplicacion.get('/profesores',(peticion,respuesta)=>{
    profesorControlador.obtenerProfesores(respuesta)
})
aplicacion.get('/horariros',(peticion,respuesta)=>{
    horariosControlador.obtenerHorarios(respuesta)
})

//levanta el servidor web 
aplicacion.listen(4000,()=>{
    console.log("subio el servidor en el puerto"+4000)
})

