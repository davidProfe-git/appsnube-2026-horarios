const db = require('../db/database');

class profesorModel { 
    //llamar toda la tabla de horario_data
    static async getprofesorData() {
        try {
            const [rows] = await db.query('SELECT * FROM profesor');
            return rows;
        } catch (error) {
            console.error('Error fetching profesor data:', error);
            throw error;
        }
}
}
module.exports = profesorModel;