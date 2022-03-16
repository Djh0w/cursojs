//Objeto se declara com {} e da para declarar funcoes em seus campos.
let amigo = {
    nome: 'Jose', 
    sexo: 'M',
    peso: 70,
    engordar (p=0) {
        console.log('Engordou')
        //this e uma palavra auto referencia ao objeto
        this.peso += p
    }}

//Isso mostra uma programação para um outro nivel. Voce tem funções dentro de variaveis.
amigo.engordar(2)    
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)