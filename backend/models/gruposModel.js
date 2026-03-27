const db = require('../db/database')

class gruposModel{
    static async obtenergrupos(){
        try{
            const[rows] = await db.query('SELECT * FROM grupos')
            return rows
        }catch(error){
            throw error
        }
    }
}
module.exports = gruposModel