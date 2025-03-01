// Exercício 2
    
// Observe a função a seguir, escrita em JavaScript:


function obterEstatisticas(numeros: number[]) {
    type TipoEstatistica = {
        maior: number,
        menor: number,
        media: number
    }

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

   

    const estatisticas: TipoEstatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e 
// faça a tipagem desses parâmetros
// Entrada number e saída number

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
//Variável soma e variável num, onde é declarada como Type Inference, variável numerosOrdenados onde 
//recebe um parâmetro tipado number e variável estatisticas onde recebe uma variável tipada number.

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades 
// numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado 
// em JavaScript:

type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number) => {}
}
const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros: number) => {}
}