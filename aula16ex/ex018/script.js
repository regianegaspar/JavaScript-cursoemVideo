let numeros = []

function adicionou(){
    let num = document.getElementById('tnum')
    let adic = document.getElementById('tadi')

    if(num.value.length == 0){       //verificando se um número foi digitado
        window.alert('Escreva um número')
    } else if(num.value < 1 || num.value > 100){        //verificando se o número está entre 1 e 100
        window.alert('Número inválido')
    } else{             //caso o número seja válido
        if(numeros.length == 0){        //Se for o primeiro número a ser adicionado
            let numero = Number(num.value)
            let criado = document.createElement('option')
                criado.text = `Valor ${numero} adicionado`
                adic.appendChild(criado)        //escrever o número na tela
                numeros.push(numero)            //adicionar número
        } else{         //se não for o primeiro número
            let numero = Number(num.value)
            let verifica = 0

            while(verifica < numeros.length){
                if(numero == numeros[verifica]){        //compara para ver se já existe um número igual
                    verifica = numeros.length + 1       //Se existir sai
                }
                verifica++
            }

            if (verifica > numeros.length){
                window.alert('Número já digitado')      //Caso o número já existe
            } else{                                        //Caso o número não exista
                let criado = document.createElement('option')
                    criado.text = `Valor ${numero} adicionado`
                    adic.appendChild(criado)
                    numeros.push(numero)
            }

        }
    }
}

function finalizou(){
    if(numeros.length == 0){                //Verifica se algum número foi digitado
        window.alert('Adiciona valores antes de finalizar')
    } else{
        let texto = document.getElementById('info')

        texto.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados <br>`    //Quantos números forammcadastrados


        let maior = numeros[0]
        let menor = numeros[0]
        for(let pos = 0; pos<numeros.length; pos++){
            if(numeros[pos] > maior){           //verifica o maior numero
                maior = numeros[pos]
            }
            if(numeros[pos] < menor){           //Verifica o menor número
                menor = numeros[pos]
            }
        }
        texto.innerHTML += `O maior valor informado foi o ${maior} <br>`
        texto.innerHTML += ` O menor número informado foi o ${menor} <br>`

        //Soma e média dos valores
        let soma = 0
        let media = 0
        for(let val = 0; val<numeros.length; val++){
            soma = soma + numeros[val]
        }
        media = soma/numeros.length
        texto.innerHTML += `Somando todos os valores temos ${soma} <br>`
        texto.innerHTML += `A média dos valores digitados é ${media}`
    }
}

