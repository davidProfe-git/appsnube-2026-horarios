const profesormodels = require('../models/profesormodels');
class Instructors {
    static async getInstructors(req, res) {
        try {
            const profesores = await profesormodels.getInstructors();
            res.json({ 
                data: profesores });   

        } catch (error) {
            throw error;
        }           
        }
    
         
                 
        }
    

   module.exports = Instructors;