import dayjs from 'dayjs'

const periodMorning = document.getElementById('morning')
const periodAfternoon = document.getElementById('afternoon')
const periodNight = document.getElementById('night')
const cardShowMorning = document.querySelector('.card-show-morning')
const cardShowAfternoon = document.querySelector('.card-show-afternoon')
const cardShowNight = document.querySelector('.card-show-night')

export function schedulesShow({ dailySchedules }) {
    try {

        cardShowMorning.innerHTML = ""
        cardShowAfternoon.innerHTML = ""
        cardShowNight.innerHTML = ""

        
        dailySchedules.forEach((schedule) => {

            // Cria os elementos de exibição do agendamento
            const item = document.createElement('li')
            item.classList.add('schedule')
            item.setAttribute('data-id', schedule.id)

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

            // Monta o item
            item.appendChild(principal)
            principal.appendChild(time)

            principal.appendChild(pet)
            principal.appendChild(tutor)

            item.appendChild(procedure)
            item.appendChild(remove)


            time.textContent = schedule.hour
            pet.textContent = schedule.pet + '/'
            tutor.textContent = schedule.tutor
            procedure.textContent = schedule.service
            remove.textContent = "Remover agendamento"

            console.log('tempo:', time)
            const timeValue = time.textContent

            // Determina o período com base no horário
            if (timeValue <= 12) {

                cardShowMorning.appendChild(item);
            } else if (timeValue <= 18) {
                cardShowAfternoon.appendChild(item)
            } else {
                cardShowNight.appendChild(item)
            }
        })



    }
    catch (error) {
        console.error("Erro ao exibir os horários:", error);
    }
}

