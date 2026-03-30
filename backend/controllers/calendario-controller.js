const { json } = require('express')
const CalendarioModel= require('../models/CalendariosModel')

class Calendarioscontroller{

    static async obtenerCalendario(respuesta){

        try{
            const Calendario = await CalendarioModel.obtenerCalendario()
            respuesta.json({
                Calendario
            })

        }catch(error){
            throw error
        }
    }
}

module.exports = Calendarioscontroller;