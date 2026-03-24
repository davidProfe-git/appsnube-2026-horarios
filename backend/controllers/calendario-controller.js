const { json } = require('express')
const CalendarioModel= require('../models/CalendariosModel')

class Calendarioscontroller{

    static async obtenerCalendario(){

        try{
            const Calendario = await CalendarioModel.obtenerCalendario
            json({
                data: Calendario
            })

        }catch(error){
            throw error
        }
    }
}