
const horariomodel = require('../models/horariomodels');

class HorarioController {
    static async gethorariosData(req, res) {
        try {
            const horario = await horariomodel.gethorariosData();
            res.json({ 
                data: horario });
        
       
       
            } catch (error) {
            throw error;
        }
    }
}
module.exports = HorarioController;


