// "alert" serve pra apresentar um alerta, uma mensagem, na página
alert("Boas vindas ao jogo do número secreto.");
// "let" forma usada para apresentar uma variável
// numeroSecreto é a variável usada para definir o número que será escolhido pelo jogo para ser o número secreto
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
// "console.log" apresenta a informação descrita dentro dos () no console da página
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Um laço de repetição para a pessoa conseguir tentar mais vezes;
while (chute != numeroSecreto ) {

    chute = prompt("Escolha um número entre 1 e 5000");

    // "if, else" são condicionais e traduzem em se e se não
    if (chute == numeroSecreto ) {

        break;

    } else {

        // Um alerta simples para avisar se o número digitado foi maior ou menor que o numeroSecreto
        if (chute < numeroSecreto){
            alert(`O número secreto é maior que o ${chute}`);
        } else {
            alert(`O número secreto é menor que o ${chute}`);
        }
    }

    tentativas++;
    
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

