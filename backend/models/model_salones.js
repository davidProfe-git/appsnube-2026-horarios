const db = require ('../db/databases');

class ModelSalones {
    static async obtenerSalones() {     
        try {
            const [rows] = await db.query('SELECT * FROM salon');
            return rows;
        }       
        catch (error){
            throw error;
        }

    }
}
module.exports = ModelSalones;