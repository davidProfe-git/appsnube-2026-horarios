const db = require('../db/database')

class maestrosModel{
    static async obtenermaestros(){
        try{
            const[rows] = await db.query('SELECT * FROM maestros')
            return rows
        }catch(error){
            throw error
        }
    }
}
module.exports = maestrosModel