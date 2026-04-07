const express = require('express');
const aplicacion = express();
const cors = require('cors');

aplicacion.use(cors());

const profesorcontroller = require('./controllers/profesorcontrollers');
const HorarioController = require('./controllers/horariocontrollers');
const grupoController = require('./controllers/gruposcontrollers');
const materiaController = require('./controllers/materiacontrollers');

aplicacion.get("/profesor", (req, res) => {
    profesorcontroller.getInstructors(req, res);
});

aplicacion.get("/horario", (req, res) => {
     HorarioController.gethorariosData(req, res);
    
});
aplicacion.listen(4000, () => {
    console.log("Servidor escuchando en el puerto 4000");
});   