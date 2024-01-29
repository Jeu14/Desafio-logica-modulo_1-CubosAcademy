

function solucao(numeros) {
    // seu codigo aqui
   
   let soma = 0
   for(let i = 0; i < numeros.length i++) { // Ou reduce
       soma += numeros[i]
       
   }
   let goleiro = soma % numeros.length //conceito de contagem progressiva
   if (goleiro === 0) {
       goleiro = numeros.length
   }
   console.log(goleiro)
}

function processData(input) {
   const strings = input.split(" ");
   const numeros = [];
   for(let i = 0; i < strings.length; i++) {
         numeros.push(parseInt(strings[i] ,10))
     }
   solucao(numeros)
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