const tutor = document.getElementById('tutor')
const pet = document.getElementById('pet')
const tel = document.getElementById('tel')
const service = document.getElementById('service')
const day = document.getElementById('day')
const hour = document.getElementById('hour')


const agendar = document.getElementById('agendar')


async function setSchedule() {
    const user = {
        tutor: tutor.value,
        pet: pet.value,
        tel: tel.value,
        service: service.value,
        day: day.value,
        hour: hour.value,
    }

    try {
        await fetch('http://localhost:4000/schedules', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            console.log('Dados enviados com sucesso!')
        } else {
            console.error("Falha no envio dos dados.")
        }


    } catch (error) {
        console.log(error)
    }

}



document.addEventListener('submit', (e) => {
    setSchedule()

})