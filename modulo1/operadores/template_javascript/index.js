// Interpretação
// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)   -Vai escrever no console a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)    -vai escrever no console b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)    -vai escrever no console c. true

// console.log("d. ", typeof resultado)  -vai escrever no console d. boolean

// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
//Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
// Será impresso no console a concatenação e juntar os dois números, pois o prompt vai reportar string ao invés de number.

// 3. 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = Number(primeiroNumero) + Number(segundoNumero)

// console.log(soma)

// Exercícios de escrita de código
// 1. Faça um programa que:
//a) Pergunte a idade do usuário
let idadeUsuario = Number(prompt("Qual é a sua idade? "))

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeMelhorAmimigo = Number(prompt("Qual é a idade do seu melhor amigo (a)? "))

//c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo (a)?", seguido pela resposta (`true` ou `false`)
const maiorIdadeUsuario = idadeUsuario > idadeMelhorAmimigo 
console.log("Sua idade é maior do que a do seu melhor amigo? ", maiorIdadeUsuario)

//d) Imprima no console a diferença de idade (não tem problema se sair um número negativo)
let diferençaDeIdade = idadeUsuario - idadeMelhorAmimigo
console.log("A diferênça de idade é: ", diferençaDeIdade)

// 2. Faça um programa que:
// a) Peça ao usuário que insira um número par
let digitarNumeroPar = Number(prompt("Digite um número par: "))

// b) Imprima no console  o resto da divisão desse número por 2.
const restoDaDivisão = digitarNumeroPar % 2
console.log("O resto da divisão é : ", restoDaDivisão)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Todos os números pares divididos por 2, o resto é 0.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Todos os números ímpares divididos por 2, o resto é 1.

// 3. 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
let idadeEmAnos = Number(prompt("Qual é a sua idade em anos? "))
    
// a) A idade do usuário em meses
let idadeEmMeses = idadeEmAnos * 12
console.log("Sua idade em meses é: ", idadeEmMeses)

// b) A idade do usuário em dias
const umAno = 365
let idadeEmDias = idadeEmAnos * umAno
console.log("Sua idade em dias é: ", idadeEmDias)

// c) A idade do usuário em horas
let idadeEmHoras = idadeEmDias * 24
console.log("Sua idade em horas é: ", idadeEmHoras)

// 4. Faça um programa que pergunte ao usuário dois números.
let primeriroNumero = Number(prompt("Digite um número: "))
let segundoNumero = Number(prompt("Digite outro número: "))
//Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
console.log("O primeiro número é maior que o segundo? ", primeriroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo? ", primeriroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo? ", primeriroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro? ", segundoNumero % primeriroNumero === 0)

//ou
// let primeiroMaior = primeriroNumero > segundoNumero
// let primeiroNumeroIgual = primeriroNumero === segundoNumero
// let primeiroDivisiSegundo = primeriroNumero % segundoNumero === 0
// let segundoDivisiPrimeiro = segundoNumero % primeriroNumero === 0

// console.log("O primeiro número é maior que o segundo? ", primeiroMaior)
// console.log("O primeiro numero é igual ao segundo? ", primeiroNumeroIgual)
// console.log("O primeiro numero é divisível pelo segundo? ", primeiroDivisiSegundo)
// console.log("O segundo numero é divisível pelo primeiro? ", segundoDivisiPrimeiro)

