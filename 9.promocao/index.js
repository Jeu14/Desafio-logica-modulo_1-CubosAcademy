


function solucao(precos) {
    //seu codigo aqui
       const soma = precos.reduce((acumulador, valorAtual) => {
           return acumulador + valorAtual 
       })
      if (precos.length >= 3) {
          let menorPreco = Math.min(...precos)
          let restoDosPrecos = soma - menorPreco
          const resultado = (menorPreco / 2) + restoDosPrecos
          console.log(resultado)
      } else {
          const soma = precos.reduce((acumulador, valorAtual) => {
              return acumulador + valorAtual
          })
          console.log(soma)
      }
      
  }
  
  
  
  function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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