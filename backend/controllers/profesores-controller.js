
const profesoresModel= require('../models/profesoresModel')

class profesorescontroller{

    static async obtenerProfesor(respuesta){

        try{
            const profesores = await profesoresModel.obtenerProfesores()
            respuesta.json({
                profesores
            })

        }catch(error){
            throw error
        }
    }
}

module.exports = profesorescontroller;