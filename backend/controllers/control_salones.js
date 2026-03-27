const controlSalones = require('../models/model_salones');
class SalonesController {
    static async obtenerSalones(req, res) {
        try{
            const salones = await ModelSalones.obtenerSalones()
            res.json({
                data: salones
            })
        }   
        catch (error){
            throw error;
        }   
    }
}
module.exports = SalonesController;