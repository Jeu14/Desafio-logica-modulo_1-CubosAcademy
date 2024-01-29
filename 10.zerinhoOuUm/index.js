

function solucao(jogadores) {
    //seu codigo aqui
      const jogadas = jogadores.map(jogador => jogador.jogada) 
      const zero = jogadas.indexOf(0)
      const um = jogadas.indexOf(1)
      if(zero !== -1 && jogadas.lastIndexOf(0) === zero) {
          console.log(jogadores[zero].nome)
      } else if (um !== -1 && jogadas.lastIndexOf(1) === um) {
          console.log(jogadores[um].nome) 
              
          } else {
              console.log("NINGUEM")
          }
      }
   
  
  function processData(input) {
      solucao(JSON.parse(input));
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
  