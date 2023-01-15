let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // vamos usar este array para analisar os dados

function isNumero (n) {
    if ( Number(n) >= 1 && Number(n) <= 100 ) {
        return true 
    } else {
        return false
    }
}

function inLista (n, l) {
    if ( l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = `` // limpa o conteudo do imput
    num.focus() // faz com que o ponto de inserção continue no imput
}

function finalizar (){
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {

        let total = valores.length // 'total' recebe o n° total de elementos da ARRAY
        let maior = valores[0] // inicializando a variável em 0
        let menor = valores[0] // inicializando a variável em 0
        let soma = 0
        let media = 0
        for (let pos in valores) { // analisar cada posição do ARRAY de valores para ver qual é o maior e menor elemento
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos] // deixa de ser o anterior e passa a ser o atual, se o atual for MAIOR.
            if (valores[pos] < menor)
                menor = valores[pos] // deixa de ser o anterior e passa a ser o atual, se o atual for MENOR.
        }

        media = soma/total // total = valores.length

        res.innerHTML = `` // vamos zerar o valor
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}