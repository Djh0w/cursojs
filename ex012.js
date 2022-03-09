var agora = new Date() //instancia Objeto do componente de horas
var hora = agora.getHours() //componente que acessa hora.
var minuto = agora.getMinutes() //componente que acessa minutos

console.log(`Agora são exatamente ${hora}:${minuto} hrs.`)

if(hora< 12){
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}