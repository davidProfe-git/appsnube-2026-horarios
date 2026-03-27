const db = require('../db/databases');
class HorariosModel {
    static async obtenerHorarios() {         
        try {
            const [rows] = await db.query('SELECT * FROM horario');
            return rows;
        }   

        catch (error){
            throw error;
        }
    }
}
module.exports = HorariosModel;