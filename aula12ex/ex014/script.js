function carregar(){ // executada ao carregar o <body> através da propriedade ONLOAD

var msg = window.document.getElementById('msg') // a var 'msg' receberá o conteúdo da id #msg
var img = window.document.getElementById('imagem') // a var 'img' receberá o conteúdo da id #imagem
var data = new Date() // a var 'data' receberá o conteúdo da da data atual (horário, dia do mês, dia da semana, fuso)
var hora = data.getHours() // a var 'hora' receberá as horas inteiras da var data

msg.innerHTML = `<strong>Agora são ${hora}h</strong>` // irá alterar o conteúdo do elemento de id #msg 

if(hora >= 0 && hora < 12) {
// BOM DIA
    img.src = 'fotomanha.png'
    document.body.style.background = '#f0ebe5'
} else if (hora >= 12 && hora < 18){
// BOA TARDE
    img.src = 'fototarde.png'
    document.body.style.background = '#eb9f48'
} else {
// BOA NOITE
    img.src = 'fotonoite.png'
    document.body.style.background = '#9b7fb7'
}
}