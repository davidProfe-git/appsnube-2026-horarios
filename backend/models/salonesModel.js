const db = require('../db/database')

class salonesModel{
    static async obtenersalones(){
        try{
            const[rows] = await db.query('SELECT * FROM salones')
            return rows
        }catch(error){
            throw error
        }
    }
}
module.exports = salonesModel