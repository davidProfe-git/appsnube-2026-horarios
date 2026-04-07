const db = require('../db/database');

class grupoModel { 
    //llamar toda la tabla de horario_data
    static async getgrupoData() {
        try {
            const [rows] = await db.query('SELECT * FROM grupo');
            return rows;
        } catch (error) {
            console.error('Error fetching grupo data:', error);
            throw error;
        }
}
}
module.exports = grupoModel;