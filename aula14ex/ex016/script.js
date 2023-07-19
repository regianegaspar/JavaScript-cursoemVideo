function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    let a = ini.value.length
    let b = fim.value.length
    let c = passo.value.length

    if(a == 0 || b == 0 || c == 0){
        window.alert('Faltam dados!')
    } else{
         res.innerHTML = 'Contando: '
         let i = Number(ini.value)
         let f = Number(fim.value)
         let p = Number(passo.value)
         if(i < f){
                for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
         } else {
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}` 
     }
}