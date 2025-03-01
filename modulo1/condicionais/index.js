// // // Tente responder os exercícios dessa seção sem executar o código.
// // // Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.

// // //1. Leia o código abaixo:
    
// //     // const respostaDoUsuario = prompt("Digite o número que você quer testar")
// //     // const numero = Number(respostaDoUsuario) 
    
// //     // if (numero % 2 === 0) {
// //     //   console.log("Passou no teste.")
// //     // } else {
// //     //   console.log("Não passou no teste.")
// //     // }
       
// //     // a) Explique o que o código faz. Qual o teste que ele realiza? O código pega o número que o usuário escolheu e testa se a divisão por 2 é igual a 0.
    
// //     // b) Para que tipos de números ele imprime no console "Passou no teste"? Números pares
    
// //     // c) Para que tipos de números a mensagem é "Não passou no teste"? Números ímpar
    
// // // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
// //     // let fruta = prompt("Escolha uma fruta")
// //     // let preco
// //     // switch (fruta) {
// //     //   case "Laranja":
// //     //     preco = 3.5
// //     //     break;
// //     //   case "Maçã":
// //     //     preco = 2.25
// //     //     break;
// //     //   case "Uva":
// //     //     preco = 0.30
// //     //     break;
// //     //   case "Pêra":
// //     //     preco = 5.5
// //     //     break; // BREAK PARA O ITEM c.
// //     //   default:
// //     //     preco = 5
// //     //     break;
// //     // }
// //     // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)      
// //     // a) Para que serve o código acima? Para dar preço a fruta escolhida pelo usuário.
    
// //     // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta Maçã é R$ 2.25
    
// //     // c) Considere que um usuário queira comprar uma Pêra, 
// //     // qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default
// //     // (o break indicado pelo comentário "BREAK PARA O ITEM c.")? O preço da fruta Pêra é R$ 5, pois sem o breack ele pula para o código de baixo. 
    
// // // 3. Leia o código abaixo:    
// //     // const numero = Number(prompt("Digite o primeiro número."))
    
// //     // if(numero > 0) {
// //     //   console.log("Esse número passou no teste")
// //     // 	let mensagem = "Essa mensagem é secreta!!!"
// //     // }
    
// //     // console.log(mensagem)       
// //     // a) O que a primeira linha está fazendo? Transformando uma string em Number
    
// //     // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? Se fosse o número 10, Esse número passou no teste e se fosse -10 não irá imprimir nada
    
// //     // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. Have´ra um erro pois a variável mensagen está no escopo da função

// //     // Exercícios de escrita de código
// //     // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
// //     // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    let idadeUsuario = (prompt('Qual a sua idade?')) 
    
// //     // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    let idadeUsuario1 = Number(idadeUsuario)
    
// //     // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
// //     // Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
    if (idadeUsuario1 >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
    
// //     // // 2. Agora faça um programa que verifica que turno do dia um aluno estuda.
// //     // // Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
// //     // // Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
    let verificaTurnoEstudante = prompt("Qual é seu turno? Digite M (matutino) ou V (Vespertino) ou N (Noturno) ").toLowerCase()
    if (verificaTurnoEstudante === "m") {
        console.log("Bom dia")
    } else if (verificaTurnoEstudante ==="v"){
        console.log("Boa tarde") 
    } else {
        console.log("Boa noite")
    }
//     // 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
    switch( verificaTurnoEstudante) {
        case "m":
            console.log("Bom dia")
            break
        case "v":
            console.log("Boa tarde") 
            break
        default:
            console.log("Boa noite")
            break
    }
// // // 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
// // // porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está 
// // // abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e 
// // // outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// // // Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
let generoDoFilme = prompt("Qual o gênero do filme?").toLowerCase()
let precoDoIngresso = +prompt("Qual o preço do ingresso?")
if (generoDoFilme === "fantasia" && precoDoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme:")
}

// // // Desafio
// // // 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem 
// // // "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar 
// // // (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e 
// // // "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
let lanchinho = prompt("Qual lanchinho você vai comprar?")


if (generoDoFilme === "fantasia" && precoDoIngresso < 15) {
    console.log(`Bom filme! Aproveite seu ${lanchinho}.`)
} else {
    console.log("Escolha outro filme:")
}

// 2. 
let nomeCompletoUsuario = prompt("Digite seu nome completo:")
let logoInDo = prompt("Digite IN para internacional, ou DO para doméstico:").toLowerCase()
let etapaDoJogo = prompt("Digite SF para semi-final, DT para descisão de terceiro lugar ou FI para final:").toLowerCase()
let categoria = prompt("Digite 1,2,3 ou 4 para qual categoria deseja:")
let quantidadeIngresso = +prompt("Digite a Quantidade de ingresso:")
let tabelaDePreçoIngresso = {
    semifinais: [1320, 880, 550, 220],
    decisãoDoTerceiroLugar: [660, 440, 330, 170],
    final: [1980, 1320, 880, 330]
}
let precoTotalIngresso = 0
let nomeEtapaDoJogo

if (etapaDoJogo === 'sf') {
    nomeEtapaDoJogo = 'Semi-final'
    if (categoria === "1") {
        precoTotalIngresso = tabelaDePreçoIngresso.semifinais[0] * quantidadeIngresso
    } else if (categoria === "2") {
        precoTotalIngresso = tabelaDePreçoIngresso.semifinais[1] * quantidadeIngresso
    } else if (categoria === "3"){
        precoTotalIngresso = tabelaDePreçoIngresso.semifinais[2] * quantidadeIngresso
    } else {
        precoTotalIngresso = tabelaDePreçoIngresso.semifinais[3] * quantidadeIngresso 
    } 
} else if (etapaDoJogo === 'dt') {
    nomeEtapaDoJogo = 'Decisão do 3º lugar'
    if (categoria === "1") {
        precoTotalIngresso = tabelaDePreçoIngresso.decisãoDoTerceiroLugar[0] * quantidadeIngresso
    } else if (categoria === "2") {
        precoTotalIngresso = tabelaDePreçoIngresso.decisãoDoTerceiroLugar[1] * quantidadeIngresso
    } else if (categoria === "3"){
        precoTotalIngresso = tabelaDePreçoIngresso.decisãoDoTerceiroLugar[2] * quantidadeIngresso
    } else {
        precoTotalIngresso = tabelaDePreçoIngresso.decisãoDoTerceiroLugar[3] * quantidadeIngresso 
    }
} else {
    nomeEtapaDoJogo = 'Final'
    if (categoria === "1") {
        precoTotalIngresso = tabelaDePreçoIngresso.final[0] * quantidadeIngresso
    } else if (categoria === "2") {
        precoTotalIngresso = tabelaDePreçoIngresso.final[1] * quantidadeIngresso
    } else if (categoria === "3"){
        precoTotalIngresso = tabelaDePreçoIngresso.final[2] * quantidadeIngresso
    } else {
        precoTotalIngresso = tabelaDePreçoIngresso.final[3] * quantidadeIngresso 
    }
}
if (logoInDo === "in"){
    let logo = 'Internacional'
    
    precoTotalIngresso /= 4.10
    console.log(`---Dados da compra---
Nome do cliente: ${nomeCompletoUsuario}
Tipo do jogo: ${logo}
Etapa do jogo: ${nomeEtapaDoJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngresso}
---Valores---
Valor do ingresso: U$ ${(precoTotalIngresso / quantidadeIngresso).toLocaleString('USD')}
Valor total do ingresso: U$ ${(precoTotalIngresso).toLocaleString('USD')}`)
} else {
    logo = 'Nacional'
    console.log(`---Dados da compra---
Nome do cliente: ${nomeCompletoUsuario}
Tipo do jogo: ${logo}
Etapa do jogo: ${nomeEtapaDoJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngresso}
---Valores---
Valor do ingresso: R$ ${(precoTotalIngresso / quantidadeIngresso).toLocaleString('pt-BR')}
Valor total do ingresso: R$ ${(precoTotalIngresso).toLocaleString('pt-BR')}`)
}


