// // Exercícios de interpretação de código
// // 1. Leia o código abaixo
// // const usuarios = [
// //     { nome: "Amanda Rangel", apelido: "Mandi" },
// //     { nome: "Laís Petra", apelido: "Laura" },
// //     { nome: "Letícia Chijo", apelido: "Chijo" }
// //   ]
  
// //   const novoArrayA = usuarios.map((item, index, array) => {
// //      console.log(item, index, array)
// //   })
// //   a) O que vai ser impresso no console? 
// // O item vai aparecer as propriedades nome e apelido seguido de seus valores, index vai aparecer
// // o número do índice de cada um e o array vai mostrar em cada linha do índice o array completo

// // 2. Leia o código abaixo
// // const usuarios = [
// //     { nome: "Amanda Rangel", apelido: "Mandi" },
// //     { nome: "Laís Petra", apelido: "Laura" },
// //     { nome: "Letícia Chijo", apelido: "Chijo" },
// //   ]
  
// //   const novoArrayB = usuarios.map((item, index, array) => {
// //      return item.nome
// //   })
  
// //   console.log(novoArrayB)
// //   a) O que vai ser impresso no console?
// // Vai aparecer ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
// // 3. Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
// //   a) O que vai ser impresso no console?
// // Vai imprimr as propriedade nome e apelido e seguido de seus valores em que o apelido é diferente de "Chijo"

// // Exercícios de escrita de código
// // 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas 
// // nos itens abaixo utilizando as funções de array map e filter:
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// //  a) Crie um novo array que contenha apenas o nome dos doguinhos
// const nomeDosPets = pets.map((pets) => {
//     return pets.nome
// })
// console.log(nomeDosPets)

// // b) Crie um novo array apenas com os cachorros salsicha
// const petsSalsicha = pets.filter((pets) => {
//     return pets.raca.toLowerCase() === "salsicha"
// })
// console.log(petsSalsicha)

// // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// // A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
// const petsPoodle = pets.filter((pets) => {
//     return pets.raca.toLowerCase() === "poodle"
// }).map((pets) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`
// })
// console.log(petsPoodle)

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando 
// as funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//  a) Crie um novo array que contenha apenas o nome de cada item
const nomeProdutos = produtos.map((produto) => {
    return produto.nome
})
// console.log(nomeProdutos)
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto
// em todos eles
// const produtosComDesconto = produtos.map((produto) => {
//     const novaListaProdutos = {
//         nome: produto.nome,
//         preco: produto.preco * 0.95
//     }
//     return novaListaProdutos
// })
// console.log(produtosComDesconto)

// // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const produtosBebidas = produtos.filter((produto) => {
//     return produto.categoria === "Bebidas"     
// })
// console.log(produtosBebidas)

// // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
// const produtosYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")    
// })
// console.log(produtosYpe)

// // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// // Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
// const itemFrase = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")    
// }).map(item => `Compre ${item.nome} por R$ ${item.preco}`)// dei uma simplificada a mais no código

// console.log(itemFrase)

// Desafios
// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//  a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const nomePokemonsAlfabetico = pokemons.map(pokemon => pokemon.nome)
console.log(nomePokemonsAlfabetico.sort())

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
let tiposPokemons = pokemons.map(pokemon => pokemon.tipo) 
const filtrarPpkemon = tiposPokemons.filter((antes, depois) => tiposPokemons.indexOf(antes) == depois
)
console.log(filtrarPpkemon)
   

