const mysql = require("mysql2")

//crear conexion a la base de datos 

const pool = mysql.createPool({

    host: 'localhost',
    user: root,
    password : Juan2808,
    port: 3306,
    database: gestion_horarios
})

module.exports = pool.promise()