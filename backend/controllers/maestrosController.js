const maestrosModel = require('../models/maestrosModel');

class maestrosController {
    static async obtenermaestros(res){
        try{
            const maestros =await maestrosModel.obtenermaestros();
            res.json({
                maestros
            })
        }catch(error){
            throw error;
        }
    }
}
module.exports = maestrosController;