const db =require('../db/databases');
class EstudianteModel {
    static async obtenerEstudiantes() { 
        try {
            const [rows] = await db.query('SELECT * FROM estudiante');
            return rows;
        }
        catch (error){
            throw error;
        }
    }
}
module.exports = EstudianteModel;