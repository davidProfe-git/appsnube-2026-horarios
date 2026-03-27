const db = require('../db/database');

class materiaModel { 
    //llamar toda la tabla de horario_data
    static async getmateriaData() {
        try {
            const [rows] = await db.query('SELECT * FROM materia');
            return rows;
        } catch (error) {
            console.error('Error fetching materia data:', error);
            throw error;
        }
}
}
module.exports = materiaModel;