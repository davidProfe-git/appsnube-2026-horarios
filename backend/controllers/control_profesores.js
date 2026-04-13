const profesorModel = require('../models/model_profesores');

class ProfesorController { 
    static async obtenerProfesores(res) {
        try{
            const profesores = await profesorModel.obtenerProfesores();
        
            res.json({
                data: profesores
            })
    } catch (error){
        throw error;
    }
    }
}
module.exports = ProfesorController;