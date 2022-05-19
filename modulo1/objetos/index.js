// Exercícios de interpretação de código
/*1. Leia o código abaixo
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) 
console.log(filme.elenco[filme.elenco.length - 1]) 
console.log(filme.transmissoesHoje[2]) 
a) O que vai ser impresso no console? 
"Matheus Nachtergaele"
"Virginia Cavendish"
{canal: "Globo", horario: "14h"}*/

// 2. Leia o código abaixo
// const cachorro = {
	// nome: "Juca", 
	// idade: 3, 
	// raca: "SRD"
// }
// 
// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
// 
// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)
//a) O que vai ser impresso no console?
// vai ser impresso {nome: "Juca", idade: 3,raca: "SRD"}
// vai ser impresso {nome: "Juba", idade: 3,raca: "SRD"}
// vai ser impresso {nome: "Jubo", idade: 3,raca: "SRD"}
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Ela indica qual objeto vai ser feito a cópia.

// 3. Leia o código abaixo
/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
a) O que vai ser impresso no console?
vai mostrar false
vai mostrar undefined
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?*/

// Exercícios de escrita de código
// 1. Resolva os passos a seguir: 
// a) Crie um objeto. Ele deve conter duas propriedades:
// nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// Exemplo de entrada

/*const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
function meusApelidos(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
meusApelidos(pessoa)
// Exemplo de saída
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi" 

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
const outraPessoa = {
    ...pessoa,    
    apelidos: ["Jo", "Jão", "Joãozinho"]
    
}

meusApelidos(outraPessoa)

// 2. Resolva os passos a seguir: 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const primeiraPessoa = {
    nome: 'Antônio',
    idade: 25,
    profissao: "Motorista"
}
const segundaPessoa = {
    nome: "Maria",
    idade: 40,
    profissao: "Adivogada"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de nome
// 2. O numero de caracteres do valor nome
// 3. O valor de idade
// 4. O valor de profissão
// 5. O numero de caracteres do valor profissão
function objetoArray(objeto1) {
    let lista = []
    lista.push(objeto1.nome,
    objeto1.nome.length, 
    objeto1.idade,
    objeto1.profissao,
    objeto1.profissao.length)
    
    
    return lista
}
console.log(objetoArray(primeiraPessoa))
console.log(objetoArray(segundaPessoa))*/

// 3. Resolva os passos a seguir:
// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
let carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
const fruta1 = {
    nome: "Maçâ",
    disponibilidade: true
}
const fruta2 = {
    nome: "Mamão",
    disponibilidade: true
}
const fruta3 = {
    nome: "Banana",
    disponibilidade: true
}

// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
function objetofruta(fruta) {
    carrinho.push(fruta)
    console.log(carrinho)
}
objetofruta(fruta1)
objetofruta(fruta2)
objetofruta(fruta3)


//d) Imprima a variável `carrinho` e garanta que ela agora seja um array preenchido com três objetos.

console.log(carrinho)

// Desafio
// 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
function pergunta() {
    let pergunta1 = prompt("Qual é o seu nome?")
    let pergunta2 = prompt("Qual é a sua idade?")
    let pergunta3 = prompt("Qual é a sua profissão?")
    let usuario = {
        nome: pergunta1,
        idade: pergunta2,
        profissao: pergunta3
    }
    return usuario

}
console.log(pergunta())
// 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true
function lancamentoDoFilme(ano1, ano2) {
    let filme1 = {
        nome: "Guerra Mundial Z", 
        anoLancamento: ano1
    }
    let filme2 = {
        nome: 'Fúria de Titâs',
        anoLancamento: ano2
    }
    let lancouPrimeiro = ano1 < ano2
    return lancouPrimeiro
}
console.log(`O primeiro filme foi lançado primeiro que o segundo?`, lancamentoDoFilme(2013,02010))
console.log(`O primeiro filme foi lançado no mesmo ano que o segundo?`, lancamentoDoFilme(2013,2010))

// 3. Crie uma função a mais pro exercício 3 de escrita de código.
// Essa função vai auxiliar o controle de estoque do sacolão:
// ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 
function disponibilidadeDeEstoque(fruta, quantidadeDeFrutas) {
    fruta.quantidade = quantidadeDeFrutas
    fruta.disponibilidade = fruta.quantidade != 0
    return carrinho

}
console.log(disponibilidadeDeEstoque(fruta1, 0))
