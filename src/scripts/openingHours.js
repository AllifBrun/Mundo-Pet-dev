import dayjs from 'dayjs'
const select = document.getElementById('hour')
const openingHours = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",


]


//Mostra os horários disponíveis para seleção
export function loadAvailableHours(){
select.innerHTML = ""

const currentDay = dayjs().format("YYYY-MM-DD")
openingHours.forEach((hour)=>{

    const fullHour = dayjs(`${currentDay} ${hour}:00`, "YYYY-MM-DD HH:mm")


//Confere se o horário está no passado
    const isAvailable = fullHour.isAfter(dayjs()) 
    const formated = fullHour.format('HH:mm')
    const value = fullHour.format('HH')

//Carrega na página os elementos option com base nos horários disponíveis                         
    if(isAvailable && fullHour){
        
        showAvailableHours(formated, value)

    }

})


}


//Carrega na página os elementos option com base nos horários disponíveis    
export function showAvailableHours(time, value){
const hour = time

const option = document.createElement('option')
option.innerHTML = hour
option.setAttribute('value', `${value}`)
select.appendChild(option)

console.log('success')
}