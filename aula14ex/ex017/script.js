function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab') // área da tabuada do <select>

    if (num.value.length == 0) {
        alert('Por favor, digite um número. ')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = `` // antes de gerar a tabuada, limpa a área do select, senão vai acumular resultados a cada submit.

        while (c <= 10) {
            
            let item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // options tem que ter "value"; para o JS não faz diferença, mas é um boa prática pq outras linguagens necessitam saber qual item do SELECT foi selecionado.
            tab.appendChild(item)
            c++
        }


    }
    
}