

function solucao(texto) {
    // Seu codigo aqui
    const quantidadePalavras = texto.split(/\s+/).filter((palavra) => palavra.length > 0) // \s+ expressao regular
    console.log(quantidadePalavras.length)
}

function processData(input) {
	solucao(input)
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