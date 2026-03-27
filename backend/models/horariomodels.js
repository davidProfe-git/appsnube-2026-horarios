const db = require('../db/database');

class horarioModel { 
    //llamar toda la tabla de horario_data
    static async gethorariosData() {
        try {
            const [rows] = await db.query('SELECT * FROM horario');
            return rows;
        } catch (error) {
            console.error('Error fetching horario data:', error);
            throw error;
        }
}
}
module.exports = horarioModel;