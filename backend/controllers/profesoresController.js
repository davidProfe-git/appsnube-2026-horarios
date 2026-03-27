const ProfesorModel = require('../models/profesoresModel')

class ProfesorController{

    static async obtenerProfesores(respuesta){

        try{
             const profesores = await ProfesorModel.obtenerProfesores()
            respuesta.json({
                data: profesores
            })
            
        } catch (error) {
            throw error
        }

    }

}

module.exports = ProfesorController