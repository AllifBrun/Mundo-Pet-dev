import { schedulesDay } from './pageLoad.js'
import {scheduleCancel} from './scheduleCancel.js'
const appointments = document.querySelectorAll('.schedule')



document.addEventListener('DOMContentLoaded', function(){
    const remove = document.querySelector('.remove')


    document.addEventListener('click', async function(e){
        if (e.target.classList.contains('remove')){
            const scheduleItem = e.target.closest('.schedule')
            scheduleItem.remove()

            const {id} = scheduleItem.dataset

            if(id){
                const isConfirm = ("Tem certeza de que deseja cancelar o agendamento?")

                if(isConfirm){

                    await scheduleCancel(id)

                    await schedulesDay()
                }
            }
        }

        
    })


})
    

