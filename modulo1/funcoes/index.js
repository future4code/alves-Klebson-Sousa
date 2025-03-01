// Exercícios de interpretação de código

// 1. Leia o código abaixo

//     function minhaFuncao(variavel) {
//     	return variavel * 5
//     }
    
//     console.log(minhaFuncao(2))
//     console.log(minhaFuncao(10)) 
    
//     a) O que vai ser impresso no console? Vai imprimir no console 10 e 50
    
//     b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2)
//     e minhaFuncao(10)? O que apareceria no console? Iria dar um erro
    
// 2. Leia o código abaixo
//     
//     let textoDoUsuario = prompt("Insira um texto");
    
//     const outraFuncao = function(texto) {
//     	return texto.toLowerCase().includes("cenoura")
//     }
    
//     const resposta = outraFuncao(textoDoUsuario)
//     console.log(resposta)
//     ```
    
//     a. Explique o que essa função faz e qual é sua utilidade. 
// Essa função coloca o texto inserido todo em minúscula e verifica se existe cenoura no texto retornando true ou false.
// Sua utilide é que eu não preciso repetir o código toda vez que eu quiser verificar essa palavra no texto.
    
//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura`   eu gosto de cenoura true
//          ii.  `CENOURA é bom pra vista` cenoura é bom pra vista true
//          iii. `Cenouras crescem na terra` cenouras cresce na terra false

// Exercícios de escrita de código

// 1. Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function sobreMim() {
    console.log("Eu sou Klebson, tenho 39 anos, moro em Volta Redonda e sou estudante")
}
sobreMim()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string).
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function informacaoPessoal(nome, idade, cidade, profissao) {
   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`)
}
informacaoPessoal('Klebson', 39, 'Volta Redonda', 'estudante')

// 2. Escreva as funções explicadas abaixo:
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function soma(num1,num2) {
    return num1 + num2
}
let resultado = soma(9, 6)
console.log(resultado)

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
function maiorOuIgual(num1, num2) {
    return num1 >= num2
}
console.log(maiorOuIgual(6, 6))

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function par(num1) {
    return num1 % 2 == 0
}
console.log(`É par? ${par(5)}`)

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function formatarMensagem(mensagem){
    console.log(mensagem.toUpperCase())
    console.log(mensagem.length)
    
}

formatarMensagem('Eu estou estudando')

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:
function somar(num1, num2) {
    soma = num1 + num2
    return soma
}
function subtração(num1, num2) {
    sutrair = num1 - num2
    return sutrair
}
function multiplicar(num1, num2) {
    multiplicar = num1 * num2
    return multiplicar
}
function dividir(num1, num2) {
    divisao = num1 / num2
    return divisao
}
let numero1 = +prompt("Digite um número")
let numero2 = +prompt("Digite outro número")
console.log(`Números inseridos: ${numero1} e ${numero2}
soma:${somar(numero1, numero2)}
Diferança:${subtração(numero1, numero2)}
Multiplicação:${multiplicar(numero1, numero2)}
Divisão:${dividir(numero1, numero2)}`)
//Números inseridos: 30 e 3
//Soma: 33
//Diferença: 27
//Multiplicação: 90
//Divisão: 10
