const salonesModel = require('../models/salonesModel');

class salonesController {
    static async obtenersalones(res){
        try{
            const salones =await salonesModel.obtenersalones();
            res.json({
                salones
            })
        }catch(error){
            throw error;
        }
    }
}
module.exports = salonesController;