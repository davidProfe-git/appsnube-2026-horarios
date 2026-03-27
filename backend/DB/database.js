const mysql = require('mysql2')

//Cear conexion a la base de datos

const pool = mysql.createPool({

    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: 3308,
    database: 'gestion_horarios'
})

module.exports = pool.promise()