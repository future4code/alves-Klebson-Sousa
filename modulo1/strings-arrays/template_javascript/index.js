//Exercícios de interpretação de código
// 1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
//let array
//console.log('a. ', array) // Vai imprimir a. undefined

//array = null
//console.log('b. ', array) // Vai imprimir b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)  Vai imprimir c. 11

// let i = 0
// console.log('d. ', array[i])  Vai imprimir d. 3

// array[i+1] = 19
// console.log('e. ', array)  Vai imprimir e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] no indice 1 do array o 19 no lugar de 4

// const valor = array[i+6]
// console.log('f. ', valor)  Vai imprimir f. 9

// 2. Leia o código com atençaõ
//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? SUBI NUM ÔNIBUS EM MIRROCOS (27)

//Exercícios de escrita de código
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:    
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
const nomeDoUsuario = prompt('Qual seu nome?')
const emailDoUsuario = prompt('Qual o seu e-mail')
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo ${nomeDoUsuario}`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//armazenado em uma variável. Em seguida, siga os passos:
let arrayComidasPreferidas = ['Churrasco', 'Bife acebolado', 'Carne de panela', 'Vaca atolada', 'Feijão tropeiro']
//a) Imprima no console o array completo
console.log(arrayComidasPreferidas)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas:
//seguida por cada uma das comidas, **uma embaixo da outra.
console.log(`Essas são minhas comidas preferidas:\n${arrayComidasPreferidas[0]}\n${arrayComidasPreferidas[1]}\n${arrayComidasPreferidas[2]}\n${arrayComidasPreferidas[3]}\n${arrayComidasPreferidas[4]}`)
/*console.log(`Essas são minhas comidas preferidas: //dessa maneira também deu certo.
${arrayComidasPreferidas[0]}
${arrayComidasPreferidas[1]}
${arrayComidasPreferidas[2]}
${arrayComidasPreferidas[3]}
${arrayComidasPreferidas[4]}`)*/
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
let preferidaDoUsuario = prompt('Qual a sua comida preferida?')
arrayComidasPreferidas[1] = preferidaDoUsuario
console.log(arrayComidasPreferidas)

// 3. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
let listaDeTarefas = []   

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let tarefa1Usuario = prompt("Digite uma tarefa que precisa fazer no dia")
let tarefa2Usuario = prompt("Digite outra tarefa que precisa fazer no dia")
let tarefa3Usuario = prompt("Digite outra tarefa que precisa fazer no dia")
listaDeTarefas.push(tarefa1Usuario, tarefa2Usuario, tarefa3Usuario)

//c) Imprima o array no console
console.log(listaDeTarefas)

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
const tarefaRealizada = prompt("Digite o índice de uma tarefa realizada sendo 0 para 1ª, 1 para 2ª e 2 para 3ª ")
    
//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaRealizada,1)
    
//f) Imprima o array no console
console.log(listaDeTarefas)

// Desafio
// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
let fraseNova = 'Hoje o dia está ótimo'
let arrayFrase = []
arrayFrase = fraseNova.split(' ')
console.log(arrayFrase)
// 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"],
//faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(`O índice de Abacaxi é ${arrayFrutas.indexOf('Abacaxi')} e o tamanho do aurray é ${arrayFrutas.length}`)