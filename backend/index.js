const express = require('express')
const application = express()
const cors = require('cors')
const gruposController = require('./controllers/gruposController');
const horariosController = require('./controllers/horariosController');
const maestrosController = require('./controllers/maestrosController');
const salonesController = require('./controllers/salonesController');

application.use(cors())
application.get('/grupos',(peticion,respuesta)=>{
    gruposController.obtenergrupos(respuesta)
})
application.use(cors())
application.get('/horarios',(peticion,respuesta)=>{
    horariosController.obtenerhorarios(respuesta)
})
application.use(cors())
application.get('/maestros',(peticion,respuesta)=>{
    maestrosController.obtenermaestros(respuesta)
})
application.use(cors())
application.get('/salones',(peticion,respuesta)=>{
    salonesController.obtenersalones(respuesta)
})

application.listen(3000, ()=>{
    console.log ("solo se puede ejecutar desde el servidor")
})