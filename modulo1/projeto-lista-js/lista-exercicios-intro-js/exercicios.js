// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = +prompt("Digite a altura do retângulo")
  let largura = +prompt("Digite a largura do retângulo")
  area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = +prompt("Digite o ano atual")
  const anoNascimento = +prompt("Digite o ano de nascimento")
  idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui  
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  let idade = +prompt('Digite sua idade')
  const email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas1 = prompt("Digite uma favorita")
  const coresFavoritas2 = prompt("Digite uma favorita")
  const coresFavoritas3 = prompt("Digite uma favorita") 
  
  let cores = []
  let total = cores.push(coresFavoritas1, coresFavoritas2, coresFavoritas3)
  console.log(cores)
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let quantIngresso = custo / valorIngresso
  return quantIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1 >= string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let elemento = array[array.length-1]
  return elemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let array3 = []
    let array2 = [] 
    array2[0] = array[array.length-1]
    array3[0] = array[0]
    array[0] = array2[array2.length-1]    
    let array4 = array.pop()
    array = array.concat(array3)   
 

    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  return string1 == string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = +prompt("Qual o ano atual?")
  const anoNascimento = +prompt("Qaual o seu ano de nascimento?")
  const anoCartIdentidade = +prompt("Qual o ano foi emitida sua carteira de identidade?")
  let idade = anoAtual - anoNascimento
  let tempoCarteira = anoAtual - anoCartIdentidade
  let renovar = false
  if (idade <= 20 && tempoCarteira >= 5 || idade > 20 && idade < 50 && tempoCarteira >= 10 || idade > 50 && tempoCarteira >= 15 ) {
    renovar = true
  } else {
    renovar = false
           
  
  }console.log(renovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}