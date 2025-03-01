/*Exercícios de interpretação de código
 1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR O PROGRAMA.
let a = 10 
let b = 10

console.log(b)  Será impresso o valor da variável b que é 10.

b = 5
console.log(a, b)  Será impresso o valor da variável a que é 10, e o novo valor da variável b que é 5.

2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR O PROGRAMA. 
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)  As variáveis a,b e c vão receber o mesmo valor que é 10 e será impresso 10,10,10.

3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
let p = prompt("Quantas horas você trabalha por dia?") 
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?") 
let valorRecebidoPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorRecebidoPorDia/horasTrabalhadasPorDia} por hora`)*/


/* Exercícios de escrita de código
1.*/
//a)
let nome
//b)
let idade
console.log(typeof nome, typeof idade) 
//d)
//Foi impresso undefined, porque é uma variável não definida, não foi atribuida nenhum valor a elas */
//e)
nome = prompt("Qual é o seu nome?")
//idade = prompt("Qual a sua idade?")
//f)
console.log(typeof nome)
console.log(typeof idade)
//Notei que as variáveis (nome e idade), mudaram de undefined para string.
//g
console.log("Olá,", nome, " você tem ", idade, " anos.")

//2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável.
//Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
//a)
const gostarDeFutebol = "você gosta de futebol?"
const instrutorLabenu = "Você é intrutor Labenu?"
const estudanteLabenu = "Você é estudante Labenu?"
const futebol = prompt(gostarDeFutebol)
const instrutor = prompt(instrutorLabenu)
const estudante = prompt(estudanteLabenu)

console.log(gostarDeFutebol)
console.log(instrutorLabenu)
console.log(estudanteLabenu)

console.log(futebol)
console.log(instrutor)
console.log(estudante)
//b)
console.log(gostarDeFutebol, futebol)
console.log(instrutorLabenu, instrutor)
console.log(estudanteLabenu, estudante)

//3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10
let b = 25
// Agora, queremos trocar os valores delas, de forma que (a) passe a ter o valor de (b) e (b) passe a ter o valor de (a). 
// Ou seja, no caso desse exemplo acima, (a) passaria a ser 25 e (b) passaria a ser 10.
// Aqui faremos uma lógica para trocar os valores
let c = a // Primeiro eu fiz a = b e b = a - 15, mas como é diferente do que aprendemos, olhei a dica.
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10 

// Desafio do dia
// 1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
let numero1 = prompt('Digite um número: ')
let numero2 = prompt('Digite outro número: ')
console.log("O ", numero1, "somado ao ", numero2, "resulta em ", Number(numero1) + Number(numero2) )
console.log("O ", numero1, "multiplicado ao ", numero2, "resulta em ", Number(numero1) * Number(numero2) )