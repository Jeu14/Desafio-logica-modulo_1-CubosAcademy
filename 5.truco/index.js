function solucao(carta) {
    //seu codigo aqui
    
    const todasAsCartas = ["Q", "J", "K", "A", "2", "3"]
    const identificandoACarta = (todasAsCartas.indexOf(carta) +1) % todasAsCartas.length
    const manilha = todasAsCartas[identificandoACarta]
    console.log(manilha)
}

function processData(input) {
    solucao(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});