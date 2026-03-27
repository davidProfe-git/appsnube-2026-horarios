const materiamodel = require('../models/materiamodels');

class materiaController {
    static async getmateriData(req, res) {
        try {
            const materia = await materiamodel.getmateriaData();
            res.json({ 
                data: materia });
        
       
       
            } catch (error) {
            throw error;
        }
    }
}
module.exports = materiaController;