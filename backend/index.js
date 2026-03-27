const express = require('express');
const aplicacion = express();

const profesorcontroller = require('./controllers/profesorcontrollers');
const HorarioController = require('./controllers/horariocontrollers');
const grupoController = require('./controllers/gruposcontrollers');
const materiaController = require('./controllers/materiacontrollers');

aplicacion.get("/profesor", (req, res) => {
    profesorcontroller.obtenerprofesor(req, res);
});

aplicacion.get("/horario", (req, res) => {
     HorarioController.gethorariosData(req, res);
    
});
aplicacion.listen(4000, () => {
    console.log("Servidor escuchando en el puerto 4000");
});   