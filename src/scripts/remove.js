import { schedulesDay } from './pageLoad.js'
import { scheduleCancel } from './scheduleCancel.js'
const appointments = document.querySelectorAll('.schedule')



document.addEventListener('DOMContentLoaded', function () {
    const remove = document.querySelector('.remove')


    document.addEventListener('click', async function (e) {
        if (e.target.classList.contains('remove')) {
            const scheduleItem = e.target.closest('.schedule')
            scheduleItem.remove()

            const { id } = scheduleItem.dataset

            if (id) {
                const isConfirm = confirm("Tem certeza de que deseja cancelar o agendamento?")

                if (isConfirm) {
                    try {

                        await scheduleCancel(id)


                        //Recarrega a lista de horários
                        await schedulesDay()
                    } catch (error) {
                        console.log('Não foi possível cancelar o agendamento:', error)
                        alert('Não foi possível cancelar o agendamento.')
                    }


                }
            }
        }


    })


})


