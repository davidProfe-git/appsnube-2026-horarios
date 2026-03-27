const ModelHorario = require('../models/model_horarios');
class HorarioController {
    static async obtenerHorarios(req, res) {
        try{
            const horarios = await HorariosModel.obtenerHorarios()
            res.json({
                data: horarios
            })
        } catch (error){
            throw error;
        }   }
    }
module.exports = HorarioController;