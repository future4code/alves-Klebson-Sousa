// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então 
//vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 10 // diz que o tipo number não pode ser atribuido ao tipo
// string.

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
//Como fazer para que essa variável também aceite strings? 
//Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 10 // Utilizamos o operador | para aceitar number ou string


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três 
//propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

const pessoa = {
    nome: "Jão",
    idade: 25,
    corFavorita: "Azul"
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {    
    nome: string,
    idade: number,
    corFavorita: string
}
const pessoa2: Pessoa = {
    nome: "Maria",
    idade: 30,
    corFavorita: "Preto"
}
const pessoa3: Pessoa = {
    nome: "Eduarda",
    idade: 18,
    corFavorita: "Amarelo"
}
const pessoa4: Pessoa = {
    nome: "Juraci",
    idade: 40,
    corFavorita: "Rosa"
}

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher 
//entre as cores do arco-íris. Utilize um `enum` para isso.

enum Cores {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZUL_ESCURO = "azul escuro",
    VIOLETA = "violeta"
}

type CoresPessoas = Pessoa & {
    corFavorita: Cores
}

const pessoa5: CoresPessoas = {
    nome: "Juraci",
    idade: 40,
    corFavorita: Cores.AMARELA
}
