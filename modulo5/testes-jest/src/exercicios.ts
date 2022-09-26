import moment from "moment"

export const numeroPar = (n: number): boolean => {
    if (n % 2 == 0) {
        return true
    }
    return false
}

// ex. 1 Crie uma função que recebe uma string como parâmetro e retorna a mesma em 
// caixa alta.

// Exemplo: a entrada “bananinha” gera a saída “BANANINHA”

// Crie pelo menos um teste que valida sua implementação.

export const minusulaParaMauscula = (arg: string): string => {
    const maiuscula = arg.toUpperCase()
    return maiuscula
}

// ex. 2 Crie uma função que recebe uma string como parâmetro e retorna um array de 
// strings onde cada item é uma letra da palavra original.

// Exemplo: a entrada “dev” gera a saída [”d”, “e”, “v”]

// Crie pelo menos um teste que valida sua implementação.

export const stringRetornaArray = (arg: string): Array<string> => {    
    const array = arg.split("")
    return array
}

// ex.3 Crie uma função que recebe um número no formato string e retorna o mesmo 
// número, porém no formato number.

// Exemplo: a entrada “50” gera a saída 50

// Crie pelo menos um teste que valida sua implementação.

export const stringParaNumber = (arg: string): number => {
    const numero = Number(arg)
    return numero
}

// ex. 4 Crie uma função que recebe uma string e retorna um number representando a 
// quantidade de caracteres da mesma.

// Exemplo: a entrada “jest” gera a saída 4

// Crie pelo menos um teste que valida sua implementação.

export const retornaQuantidadeCaracteres = (arg: string): number => {
    const caracteres = arg.length
    return caracteres
}

// ex. 5 Crie uma função que gera um número aleatório entre 1 e 10.

// Exemplo: a execução da função gera a saída entre 1 e 10.

// Crie pelo menos um teste que valida sua implementação.

export const retornaNumeroAleatorio = (min: number, max: number): number => {
    const numero = Math.floor(Math.random() * (max - min) + min)
    return numero
}

// ex. 6 Crie uma lista de usuários (você decide quais propriedades existem na sua 
// tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.

export interface User {
    name: string,
    eage: number
}

export const users: User[] = [
    {
        name: "João",
        eage: 35
    },
    {
        name: "Maria",
        eage: 32
    },
    {
        name: "Astrodev",
        eage: 30
    },
]

//  ex. 7 Crie uma função que recebe uma lista de números positivos e retorna sua 
// média arredondada para cima.

// Exemplo: a entrada [10, 4, 7, 6] gera a saída 7

// Crie pelo menos um teste que valida sua implementação.

export const mediaArredondadaParCima = (array: number[]): number => {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        let numero = array[i]
        soma += numero  
    }
    const media = soma / array.length
    return Math.ceil(media) 

}

// ex. 8 Crie uma função que recebe um ano de nascimento e retorna a idade atual.

// Exemplo: a entrada 2000 gera a saída 22

// Crie pelo menos um teste que valida sua implementação.

export const idadeAtual = (anoNasc: number): number => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const anosIdade = anoAtual - anoNasc
    return anosIdade
}

// ex. 9 Crie uma função que recebe uma data no formato “aaaa/mm/dd” e retorna outra 
// string no formato “dd/mm/aaaa”.

// Exemplo: a entrada “2022/09/26” gera a saída “26/09/2022”

// Crie pelo menos um teste que valida sua implementação.

export const formatarData = (dat: string): string => {
    let data = moment(dat, "YYYY/MM/DD").format("DD/MM/YYYY")
    return data
}