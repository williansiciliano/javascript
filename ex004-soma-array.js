let lista=[]
lista.push(2)
lista.push(4)
lista.push(6)
lista.push(8)
lista.push(10)

console.log(lista)

let soma = 0 // 'soma' começando com o valor ZERO

for (let pos in lista) {
soma += lista[pos] // soma = soma + lista[pos]
}

console.log(soma)