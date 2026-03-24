const db = require('../DB/database')// conexion a DB

class CalendariosModel{

    //llamar a todos los profesores 
    static async obtenerCalendario(){
        try{
            const [rows] = await db-query('SELET * FROM horario ')
            return rows
        }catch(error){
            throw error
        }
    }
}