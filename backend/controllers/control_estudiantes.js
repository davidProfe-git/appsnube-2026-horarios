
const EstudianteModel = require('../models/model_estudiantes');
class EstudianteController {
    static async obtenerEstudiantes(req, res) {
        try{
            const estudiantes = await EstudianteModel.obtenerEstudiantes()

          res.json({
                data: estudiantes
            })
        } catch (error){
            throw error;
        }   }
    }
module.exports = EstudianteController;