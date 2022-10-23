function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano') // ano digitado no formulário
    var res = window.document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){ // nem precisava converter; sem o 'Number' funcionou
        alert('ERRO! Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') // variável 'fsex' recebe a escolha de 'Masculino'([0]) ou 'Feminino'([1])
        var idade = ano - Number(fano.value)
        var genero = '' // variável 'genero' recebendo valor nulo

        var img = document.createElement('img') // criar uma tag <img> e atribuir seu conteúdo à variável 'img'
        img.setAttribute('id', 'foto') // a <img> criada terá um id = 'foto' 

        if ( fsex[0].checked){ // [0] indica que é a primeira opção das bolinhas do sexo name ='radsex', ou seja, Masculino.
            genero = 'Homem'
            document.body.style.background = '#468eec'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'fotokid-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovem-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotoadulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidoso-m.png')
            }
        } else if (fsex[1].checked){ // [1] indica que é a segunda opção das bolinhas do sexo name = 'radsex', ou seja, Feminino.
            genero = 'Mulher'
            document.body.style.background = '#da4ed3'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'fotokid-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovem-f.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotoadulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
