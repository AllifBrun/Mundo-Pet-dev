import {scheduleFetchByDay} from './schedule-fetch-by-day.js'
import {schedulesShow} from './schedulesShow.js'

const dayjs = require('dayjs')
const now = dayjs().format('DD-MM-YY HH:mm')
const today = dayjs().format('YYYY-MM-DD')
console.log(now)

const dateSelected = document.getElementById('dateSelected')
dateSelected.value = today

document.addEventListener('DOMContentLoaded', function(){
    schedulesDay()
})

export async function schedulesDay(){
    const date = dateSelected.value

    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)
    
    schedulesShow({ dailySchedules })
}


dateSelected.addEventListener
("change", function(){
schedulesDay()
console.log('executado')
})