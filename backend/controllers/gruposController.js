
const gruposModel = require('../models/gruposModel');

class gruposController {
    static async obtenergrupos(res){
        try{
            const grupos =await gruposModel.obtenergrupos();
            res.json({
                 grupos
                })
        }catch(error){
            throw error;
        }
    }
}
module.exports = gruposController;