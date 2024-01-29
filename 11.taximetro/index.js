/*const km = 11.5
const min = 25
const valorKm = 70
const valorMin = 50


let kmAdicional = 50
let minAdicional = 30

let precoMin = valorMin * min
let precoKm = valorKm * km

if (km > 10) {
    let valorKmAdicional = (km - 10) * kmAdicional
    precoKm += valorKmAdicional
} 
if (min > 20) {
    let valorMinAdicional = (min - 20) * minAdicional
    precoMin += valorMinAdicional
}
const resultado = precoKm + precoMin

console.log(Math.floor(resultado))*/





function solucao(min, km) {
    //seu codigo aqui
    const minutoInicial = 50
    const kmInicial = 70
    const kmAdicional = 50 
    const minutoAdicional = 30 

    let total = 0


    if (min > 20) {
    const novoMin = min - 20
    total += 20 * minutoInicial + novoMin * minutoAdicional
    } else {
    total += min * minutoInicial
    }


    if (km > 10) {
    const novoKm = km - 10
    total += 10 * kmInicial + novoKm * kmAdicional
    } else {
    total += km * kmInicial
    }


    total = Math.floor(total)

    console.log(total) //return não funcionou no hackerrank

}

console.log(solucao(25, 11.5)) // apenas pra rodar no vscode





/*let km = 11.5
let min = 25
let valorKm = 70
let valorMin = 50

let kmAdicional = 0
let minAdicional = 0

let preco = (kmAdicional * km) + (minAdicional * min)

if (km > 10) {
    kmAdicional = valorKm - 20
    preco = (kmAdicional * km) + (minAdicional * min)  
} 
if (min > 20) {
    minAdicional = valorMin - 20
    preco = (kmAdicional * km) + (minAdicional * min)
}


console.log(Math.floor(preco))*/

//Ainda incompleto

/*let valorKmAntesDaPromo = 70
let valorKmDepoisDaPromo = 50
let ValorMinAntesDaPromo = 50
let valorMinDepoisDaPromo = 30

let preco = 0

if (km > 10) {
    let valorKmFinal = (valorKmDepoisDaPromo * km) + (ValorMinAntesDaPromo * min)
    preco = valorKmFinal 
} 
 if (min > 20) {
    let valorMinFinal = (valorMinDepoisDaPromo * min) + (valorMinDepoisDaPromo * min)
    preco = valorMinFinal
} else {
    preco = (valorKmAntesDaPromo * km) + (ValorMinAntesDaPromo * min)
}


console.log(Math.floor(preco))*/