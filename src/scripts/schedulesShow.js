import dayjs from 'dayjs'

const periodMorning = document.getElementById('morning')
const periodAfternoon = document.getElementById('afternoon')
const periodNight = document.getElementById('night')

export function schedulesShow({ dailySchedules }){
    try{
    

        dailySchedules.forEach((schedule)=>{
            const item = document.createElement('li')
            item.classList.add('schedule')

            const principal = document.createElement('div')
            principal.classList.add('principal')


            const time = document.createElement('div')
            time.classList.add('time')

            const pet = document.createElement('div')
            pet.classList.add('pet')

            const tutor = document.createElement('div')
            tutor.classList.add('tutor')

            const procedure = document.createElement('div')
            procedure.classList.add('procedure')

            const remove = document.createElement('div')
            remove.classList.add('remove')


            item.appendChild(principal)
            principal.appendChild(time)

            principal.appendChild(pet)
            principal.appendChild(tutor)

            item.appendChild(procedure)
            item.appendChild(remove)


            time.textContent = schedule.hour
            pet.textContent = schedule.pet
            tutor.textContent = schedule.tutor
            procedure.textContent = schedule.service
            remove.textContent = "Remover agendamento"
        })

        const scheduleHour = dayjs(schedule.hour, 'HH:mm');
        if (scheduleHour.isBefore(dayjs('12:00', 'HH:mm'))) {
            periodMorning.appendChild(item);
        } else if (scheduleHour.isBefore(dayjs('18:00', 'HH:mm'))) {
            periodAfternoon.appendChild(item);
        } else {
            periodNight.appendChild(item);
        }
    }
 catch (error) {
    console.error("Erro ao exibir os horários:", error);
}}
