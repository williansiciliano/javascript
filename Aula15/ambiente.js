let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro elemento é o ${num[0]}.`)

let pos = num.indexOf(4)

if ( pos == -1 ) {
    console.log(`Elemento não encontrado!`)
} else {
console.log(`O elemento está na posição ${pos}.`)
}