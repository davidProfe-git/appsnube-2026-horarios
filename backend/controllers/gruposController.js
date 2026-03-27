
const gruposModel = require('../models/gruposModel');

class gruposController {
    static async obtenergrupos(res){
        try{
            const grupos =await gruposModel.obtenergrupos();
            res.json({
                data: grupos})
        }catch(error){
            throw error;
        }
    }
}
module.exports = gruposController;