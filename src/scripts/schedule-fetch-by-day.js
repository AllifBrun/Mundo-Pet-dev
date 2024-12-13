import dayjs from 'dayjs'

export async function scheduleFetchByDay({date}){
const response = await fetch('http://localhost:4000/schedules')
const data = await response.json()

const dailySchedules = data.filter((schedule)=> dayjs(date).isSame(schedule.when, 'day'))

return dailySchedules
}