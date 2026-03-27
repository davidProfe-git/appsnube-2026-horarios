const mysql = require('mysql2');
const pool = mysql.createPool({
    
host: 'localhost',
user: 'root',
password:'guatato1523',
port: 3306,     
database: 'gestion_horarios'  
});

module.exports = pool.promise();

