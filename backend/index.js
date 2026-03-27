const express = require('express')
const application = express()

const gruposController = require('./controllers/gruposController');
const horariosController = require('./controllers/horariosController');
const maestrosController = require('./controllers/maestrosController');
const salonesController = require('./controllers/salonesController');

application.get('/grupos',(peticion,respuesta)=>{
    gruposController.obtenergrupos(respuesta)
})
application.get('/horarios',(peticion,respuesta)=>{
    horariosController.obtenerhorarios(respuesta)
})
application.get('/maestros',(peticion,respuesta)=>{
    maestrosController.obtenermaestros(respuesta)
})
application.get('/salones',(peticion,respuesta)=>{
    salonesController.obtenersalones(respuesta)
})

application.listen(3000, ()=>{
    console.log ("solo se puede ejecutar desde el servidor")
})