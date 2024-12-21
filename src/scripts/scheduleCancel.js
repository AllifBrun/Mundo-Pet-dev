export async function scheduleCancel(id){
const itemId = id


try {
    await fetch(`http://localhost:4000/schedules/${itemId}`, {
        method: 'DELETE',
    })
    
    alert('Agendamento cancelado com sucesso.')

} catch (error) {
console.log(error)
alert('Não foi possível cancelar o agendamento')    
}


}