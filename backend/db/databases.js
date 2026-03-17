const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_database',
    port : 3306,
    database : 'horarios.sql',
});
module.exports = pool.promise();