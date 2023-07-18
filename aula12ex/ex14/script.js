function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    // @ts-ignore
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if(hora >= 0 && hora < 12){
        // @ts-ignore
        img.src = 'img/manha.jpg'
        document.body.style.background = '#ffeace'
    } else if (hora >= 12 && hora < 18){
        // @ts-ignore
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#ff8406'
    } else{
        // @ts-ignore
        img.src = 'img/noite.jpg'
        document.body.style.background = '#0b0d0d'
    }
}

