const express = require('express');
const aplicacion = express0();
aplicacion.get("/mateoalejandro", (req, res) => {
    res.send("Hola, soy Mateo Alejandro");
});
aplicacion.listen(4000, () => {
    console.log("Servidor escuchando en el puerto 4000");
});