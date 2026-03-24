const db = require('../db/database');

class DashboardModel { 
    //llamar toda la tabla de dashboard_data
    static async getDashboardData() {
        try {
            const [rows] = await db.query('SELECT * FROM dashboard_data');
            return rows;
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            throw error;
        }
}
}