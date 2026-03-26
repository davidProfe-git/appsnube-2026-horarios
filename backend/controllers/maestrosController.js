const maestrosController = require('../controllers/maestrosController');

class maestrosController {
    static async getmaestrosData(req ,res){
        try{
            const profesores =await maestrosController.getmaestrosData();
            json({
                data: profesores})
        }catch(error){
            throw error;
        }
    }
}
module.exports = maestrosController;