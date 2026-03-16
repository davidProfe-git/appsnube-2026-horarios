const mysql = require('mysql2')

const pool =mysql.createPool({
    host: localhost,
    User: Root,
    password : 1234,
    port : 3306,
    database: dashboard_de_horarios_escolares

})

module.exports =pool.promise()

