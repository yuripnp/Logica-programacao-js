alert('Bem vindo ao jogo do número secreto!');
let  numeroLimiteMaximo = 200;
let numeroSecreto = parseInt(Math.random()* numeroLimiteMaximo + 1)
console.log(numeroSecreto);
let tentativas = 1
let chute = 101
// verificação do chute

while (chute != numeroSecreto) {
    let chute = prompt(`escolha um numero entre 1 e ${numeroLimiteMaximo}`);
    if(chute == numeroSecreto) {
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
let mensagemTentativa = tentativas > 1 ? `tentativas` : `tentativa`
alert(`você acertou, ${numeroSecreto} foi o numero secreto, com ${tentativas} ${mensagemTentativa}`);
