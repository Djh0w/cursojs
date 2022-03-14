let num = [5,8,2,9,3]
num.push(7)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//BUSCA A POSIÇÃO DO VALOR DENTRO DE .indexOf()
let pos = num.indexOf(5)

if (pos == -1) { // JS RETORNA -1 QUANDO VALOR NAO EXISTE NO ARRAY. VERIFICAÇÃO NA CONDIÇÃO
    console.log('VALOR INEXISTENTE!')
} else { //CASO SEJA UM VALOR QUE EXISTE NO ARRAY ELE RETORNA A POSIÇÃO.
    console.log(`O valor 8 está na posição ${pos}`)
}

