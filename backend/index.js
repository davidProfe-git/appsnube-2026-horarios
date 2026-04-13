const express = require("express")
const cors = require('cors')
const aplicacion = express()
const profesorControlador = require('./controllers/profesores-controller')
const horariosControlador = require('./controllers/calendario-controller')

//Router
aplicacion.use(cors())
aplicacion.get('/profesor',(peticion,respuesta)=>{
    profesorControlador.obtenerProfesor(respuesta)
})
aplicacion.get('/horarios', (peticion, respuesta)=>{
    horariosControlador.obtenerCalendario(respuesta)
})

//Levanta el servidor web
aplicacion.listen(4000,()=>{
    console.log('subio el servidor en el puerto')
})

