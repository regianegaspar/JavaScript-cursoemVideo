function clicou(){
    let num = document.getElementById('tnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Digite um número')
        // let item = document.createElement('option')
        // item.text = `Digite um nº inteiro`
        // tab.appendChild(item)
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ' '
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }


}





/*
Minha solução sem o select
function clicou(){
var num = window.document.getElementById('tnum')    //pegando o número digitado
var numero = Number(num.value)      //pegando o valor numerico do que foi digitado
var tabu = window.document.getElementById('tabu')
var aux = 0

    if(num.value.length == 0 || numero < 0){        verificando se o número natural
        tabu.innerHTML = 'Digite um número natural'
    } else {
        tabu.innerHTML = 'Sua tabuada: <br>'
    for(var i = 1; i <= 10; i++){
        aux = i * numero
        tabu.innerHTML += `${i} x ${numero} = ${aux} <br>`
    }
}
}*/