const db = require('../db/database')

class horariosModel{
    static async obtenerhorarios(){
        try{
            const[rows] = await db.query('SELECT * FROM horarios')
            return rows
        }catch(error){
            throw error
        }
    }
}
module.exports = horariosModel