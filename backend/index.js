const express = require('express');
const aplicacion = express();
const controladorProfesores = require('./controllers/control_profesores');
const controladorSalones = require('./controllers/control_salones');
const controladorEstudiantes = require('./controllers/control_estudiantes');
const controladorHorarios = require('./controllers/control_horario');

aplicacion.get('/profesores',(req, res) =>{
    controladorProfesores.obtenerProfesores(res)
});


aplicacion.get('/salones',(req, res) => {
    controladorSalones.obtenerSalones(res)
});
aplicacion.get('/estudiantes',(req,res) => 
    { controladorEstudiantes.obtenerEstudiantes(res)

    });

aplicacion.get('/horarios',(req, res)=>
    { controladorHorarios.obtenerHorarios(res) 

    });

aplicacion.listen(3000, () => {
console.log('Servidor iniciado en el puerto 3000')
})
