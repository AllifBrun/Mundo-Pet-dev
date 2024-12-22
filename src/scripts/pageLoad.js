import {scheduleFetchByDay} from './schedule-fetch-by-day.js'
import {schedulesShow} from './schedulesShow.js'
import {loadAvailableHours} from './openingHours.js'

const dayjs = require('dayjs')
const now = dayjs().format('DD-MM-YY HH:mm')
const today = dayjs().format('YYYY-MM-DD')
console.log(now)

const dateSelected = document.getElementById('dateSelected')
dateSelected.value = today
dateSelected.setAttribute('min', today)

document.addEventListener('DOMContentLoaded', function(){
    schedulesDay()
})

export async function schedulesDay(){
    const date = dateSelected.value

    //Obtém os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)
    //carrega os horários disponíveis para agendar
    loadAvailableHours(dailySchedules)

    //carrega os horários agendados
    schedulesShow({ dailySchedules })
}


dateSelected.addEventListener
("change", function(){
schedulesDay()
console.log('executado')
})