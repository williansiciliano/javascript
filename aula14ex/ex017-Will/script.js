function CriarTabuada(){
    var numero = document.getElementById('txtnumero')
    var res = document.getElementById('res')

    if(numero.value.length == 0){
        window.alert('Por favor, digite um número')
    } else {
        var num = Number(numero.value)
        var o1 = document.getElementById('o1')
        o1.innerHTML = `${num} x 1 = `+ num * 1

        var o2 = document.getElementById('o2')
        o2.innerHTML = `${num} x 2 = `+ num * 2

        var o3 = document.getElementById('o3')
        o3.innerHTML = `${num} x 3 = `+ num * 3

        var o4 = document.getElementById('o4')
        o4.innerHTML = `${num} x 4 = `+ num * 4

        var o5 = document.getElementById('o5')
        o5.innerHTML = `${num} x 5 = `+ num * 5

        var o6 = document.getElementById('o6')
        o6.innerHTML = `${num} x 6 = `+ num * 6

        var o7 = document.getElementById('o7')
        o7.innerHTML = `${num} x 7 = `+ num * 7

        var o8 = document.getElementById('o8')
        o8.innerHTML = `${num} x 8 = `+ num * 8

        var o9 = document.getElementById('o9')
        o9.innerHTML = `${num} x 9 = `+ num * 9

        var o10 = document.getElementById('o10')
        o10.innerHTML = `${num} x 10 = `+ num * 10
    }
}