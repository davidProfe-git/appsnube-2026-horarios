const horariosModel = require('../models/horariosModel');

class horariosController {
    static async obtenerhorarios(res){
        try{
            const horarios =await horariosModel.obtenerhorarios();
            res.json({
                horarios
            })
        }catch(error){
            throw error;
        }
    }
}
module.exports = horariosController;