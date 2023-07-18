function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}` Teste da conta
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade<10){
                img.setAttribute('src', 'img/crianca-m.jpg')
            }
            else if(idade < 22){
                img.setAttribute('src', 'img/jovem-m.jpg')
            }
            else if(idade < 60){
                img.setAttribute('src', 'img/adulto-m.jpg')
            }
            else{
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
        } else {
            gênero = 'Mulher'
            if (idade >=0 && idade<10){
                img.setAttribute('src', 'img/crianca-f.jpg')
            }
            else if(idade < 22){
                img.setAttribute('src', 'img/jovem-f.jpg')
            }
            else if(idade < 60){
                img.setAttribute('src', 'img/adulto-f.jpg')
            }
            else{
                img.setAttribute('src', 'img/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
