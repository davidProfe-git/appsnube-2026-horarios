const db = require('../db/databases');
class Profesormodel {
    static async obtenerProfesores() {
        try {
            const [rows] = await db.query('SELECT * FROM profesor');
            return rows;
        
        } catch (error){
            throw error;    

        }

    }
}
module.exports = Profesormodel;

