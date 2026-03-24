
const dashboardController = require('../models/dashboardmodels');

class DashboardController {
    static async getDashboardData(req, res) {
        try {
            const profesores = await dashboardController.getDashboardData();
            json({ 
                data: profesores });
        
       
       
            } catch (error) {
            throw error;
        }
    }
}
module.exports = DashboardController;


