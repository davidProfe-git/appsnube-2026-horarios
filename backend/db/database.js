const mysql = require('mysql2');
const pool = mysql.createPool({
    
host: 'localhost',
user: 'root',
password:1523,
port: 3306,     
database: 'horarios'  
});

module.exports = pool.promise();

