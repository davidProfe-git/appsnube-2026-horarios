const profesormodels = require('../models/profesormodels');
class Instructors {
    static async getInstructors(req, res) {
        try {
            const profesores = await profesormodels.getprofesorData();
            res.json({ 
                data: profesores });   

        } catch (error) {
            throw error;
        }           
        }
    
         
                 
        }
    

   module.exports = Instructors;