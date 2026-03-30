const db = require('../DB/database')// conexion a DB

class profesoresModel{

    //llamar a todos los profesores 
    static async obtenerProfesores(){
        try{
            const [rows] = await db.query('SELECT * FROM profesor')
            return rows
        }catch(error){
            throw error
        }
    }

}

module.exports = profesoresModel;