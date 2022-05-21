/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")
    const carta = comprarCarta();
    if (confirm("Quer iniciar uma nova rodada?")) {
       // confirm("Compre uma carta")
       const carta2 = comprarCarta();
       const pontuacaoUsuario = carta2.valor + carta.valor
       const carta3 = comprarCarta()
       const carta4 = comprarCarta()
       const pontuacaoComputador = carta3.valor + carta4.valor
    
       console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto} - pontuação ${pontuacaoUsuario}`) 
       console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação ${pontuacaoComputador}`) 
       if (pontuacaoComputador > pontuacaoUsuario) {
          console.log("O computador ganhou!")
       } else if (pontuacaoComputador < pontuacaoUsuario) {
          console.log("O usuário ganhou!")
       } else {
          console.log("Empate!")
       }
    // console.log(carta.valor, carta2.valor) 
    // imprime o valor da carta (um número). Nesse caso: 10)
    } else {
       console.log("O jogo acabou")
    }