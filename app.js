alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto);
let tentativas = 0
let chute = 101
// verificação do chute

while (chute != numeroSecreto) {
    let chute = prompt('Escolha um numero entre 1 e 100');
    if(chute == numeroSecreto) {
        alert(`você acertou, ${numeroSecreto} foi o numero secreto`);
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
    
}

alert(`você conseguiu com ${tentativas} tentativas`)
