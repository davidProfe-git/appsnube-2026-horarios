const innstructorsControllers = require('../controllers/insturctoscontrollers');
class Instructorscontroller {
    static async getInstructors(req, res) {
        try {
            const profesores = await innstructorsControllers.getInstructors();
            json({ 
                data: profesores });   

        } catch (error) {
            throw error;
        }           
        }
    
         
                 
        }
    

   module.exports = Instructorscontroller;