import {scheduleFetchByDay} from './schedule-fetch-by-day.js'
import {schedulesShow} from './schedulesShow.js'

const dayjs = require('dayjs')
const now = dayjs().format('DD-MM-YY HH:mm')


console.log(now)

const dateSelected = document.getElementById('dateSelected')

export async function schedulesDay(){
    const date = dateSelected.value

    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)
    
    schedulesShow({ dailySchedules })
}


document.addEventListener
("DOMContentLoaded", function(){
schedulesDay()
})