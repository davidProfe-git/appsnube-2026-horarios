
const profesoresModel= require('../models/profesoresModel')

class profesorescontroller{

    static async obtenerProfesor(){

        try{
            const profesores = await profesoresModel.obtenerProfesor
            json({
                data: profesor
            })

        }catch(error){
            throw error
        }
    }
}