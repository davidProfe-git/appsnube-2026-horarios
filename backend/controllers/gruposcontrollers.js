const grupomodel = require('../models/grupomodels');

class grupoController {
    static async getgrupoData(req, res) {
        try {
            const grupo = await grupomodel.getgrupoData();
            res.json({ 
                data: grupo });
        
       
       
            } catch (error) {
            throw error;
        }
    }
}
module.exports = grupoController;