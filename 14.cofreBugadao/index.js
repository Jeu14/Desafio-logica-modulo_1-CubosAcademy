//MÉTODO UTILIZADO PARA RESOLVER O PROBLEMA PELO VSCODE

let senhaCorreta = "cubos"
let palavraDigitada = "ewvelrabsocaeln"

function cofreBugadao (senhaCorreta, palavraDigitada) {
    let senha = 0

    for (let i = 0; i < palavraDigitada.length; i++) {
        if (senha < senhaCorreta.length && senhaCorreta[senha] == palavraDigitada[i]) {
            senha++
        }
    }
    return senha === senhaCorreta.length
}
if (cofreBugadao(senhaCorreta, palavraDigitada)) {
    console.log("SIM")
} else {
    console.log("NAO")
}


//ADAPTAÇÃO PARA RODAR NO HACKERRANK

/*function cofreBugadao(senhaCorreta, palavraDigitada) {
    //Enter your code here
    let senha = 0

    for (let i = 0; i < palavraDigitada.length; i++) {
        if (senha < senhaCorreta.length && senhaCorreta[senha] === palavraDigitada[i]) {
            senha++
        }
    }
    return senha === senhaCorreta.length
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    const inputLines = _input.trim().split("\n") // Local alterado para que a funcao funcione corretamente
    const senhaCorreta = inputLines[0] //primeiro parametro
    const palavraDigitada = inputLines[1] //segundo parametro

    if (cofreBugadao(senhaCorreta, palavraDigitada)) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }
});*/
