let nomeCompletoUsuario = prompt("Digite seu nome completo:")
let jogoInDo = prompt("Digite IN para jogo internacional, ou DO para jogo Nacional:").toLowerCase()
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
if (jogoInDo === "in"){
    let jogo = 'Internacional'
    
    precoTotalIngresso /= 4.10
    console.log(`---Dados da compra---
Nome do cliente: ${nomeCompletoUsuario}
Tipo do jogo: ${jogo}
Etapa do jogo: ${nomeEtapaDoJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngresso}
---Valores---
Valor do ingresso: U$ ${(precoTotalIngresso / quantidadeIngresso).toLocaleString('USD')}
Valor total do ingresso: U$ ${(precoTotalIngresso).toLocaleString('USD')}`)
} else {
    jogo = 'Nacional'
    console.log(`---Dados da compra---
Nome do cliente: ${nomeCompletoUsuario}
Tipo do jogo: ${jogo}
Etapa do jogo: ${nomeEtapaDoJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngresso}
---Valores---
Valor do ingresso: R$ ${(precoTotalIngresso / quantidadeIngresso).toLocaleString('pt-BR')}
Valor total do ingresso: R$ ${(precoTotalIngresso).toLocaleString('pt-BR')}`)
}