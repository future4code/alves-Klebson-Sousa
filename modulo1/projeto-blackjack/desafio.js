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
    const carta1 = comprarCarta(); 
    const carta2 = comprarCarta()
    carta3 = comprarCarta()
    carta4 = comprarCarta()
    carta5 = comprarCarta()
    
    let usuario = []
    let computador = []
    if (confirm("Bem vido ao jogo Blackjack!\nQuer iniciar uma nova rodada?")) {
       if (carta1 === "A" && carta2 ==="A" || carta3 === "A" && carta4 ==="A") {
          confirm("Sorteie novamente")
       } else if (carta1 !== "A" && carta2 !=="A" || carta3 !== "A" && carta4 !=="A") {
          usuario.push(carta1.texto, carta2.texto)
          computador.push(carta3.texto, carta4.texto)
          if (confirm(`Suas cartas são ${usuario[0]} ${usuario[1]}. A carta revelada do computador é ${computador[0]}\nDeseja comprar mais carta?`)) {
             usuario.push(carta5.texto)
          } else {
             alert(`Usuário - Cartas: ${usuario[0]} ${usuario[1]} - Pontuação ${carta1.valor + carta2.valor}\nComputador - Cartas: ${computador[0]} ${computador[1]} - Pontuação ${carta3.valor + carta4.valor}`) }
          
          
       }
    } else {}
    console.log(usuario, computador)