let num = [5, 8, 2, 9, 3]

// console.log(`Nosso vetor é o ${num}`)
// console.log(num)
// console.log(`O vetor tem ${num.length} posições`)
// console.log(num[1])

// num.sort()      //ordena
// num.push(1)     //adicionou depois de ordenar

// console.log(num)

// for(var pos = 0; pos<num.length; pos++){
//     console.log(num[pos])
// }

num.sort()
num.push(1)
// let pos = num.indexOf(8)
// console.log(`O valor 8 está na posição ${pos}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}