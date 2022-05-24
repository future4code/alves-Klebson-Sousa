// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a, b) => {
     return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let pares = array.filter(par => (par %2)== 0)
    return pares 
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter(par => (par %2)== 0)
    let paresElevados = []
    for (let i = 0; i < pares.length; i++) {
        paresElevados.push(pares[i]**2)        
    }
    return paresElevados
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    function maiorNum(num1, num2) {
        if (num1 > num2) {
            return num1
        } else {
            return num2
        }
    }
    let maiorNumero1 = maiorNum(num1, num2)
    let menorNum = (num1, num2) => {
        if (num1 < num2) {
            return num1
        } else {
            return num2
        }
    }
    let menorNumero1 = menorNum(num1, num2)
    let maiorDivisivelPorMenor1 = maiorNumero1 % menorNumero1 === 0 ? true: false
    let diferenca1 = maiorNumero1 - menorNumero1 
    const objectNumber = {
        maiorNumero: maiorNumero1,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor1,
        diferenca: diferenca1
    }
    return objectNumber
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = []
    for(let i = 0;primeirosPares.length < n; i+=2) {
        primeirosPares.push(i)        
   }
   return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) return "Equilátero"
    else if (ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoB!== ladoA || ladoC === ladoA && ladoC !== ladoB)
    return "Isósceles" 
    else return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayEmOrdem = array.sort((a, b) => {
        return a-b
    })
    let novoArray = []
    let segundoMenorValor = arrayEmOrdem[1]
    let segundoMaiorValor = arrayEmOrdem[arrayEmOrdem.length-2]
    novoArray.push(segundoMaiorValor, segundoMenorValor)
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   filme = {
       nome: "O Diabo Veste Prada",
       ano: 2006,
       diretor: 'David Frankel',
       atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa = {
    nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
    }
    const pessoa1 = {nome: "ANÔNIMO"}
    let novoObjeto = {...pessoa, ...pessoa1}
    return novoObjeto
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = pessoas.filter((pessoa) => {
       if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
           return pessoa
       }
   })
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            return pessoa
        }
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let resultado = contas.map((conta) => {
    let totalCompras = conta.compras.reduce((itemAnt, itemAtual) => itemAnt + itemAtual, 0)
    let saldo = conta.saldoTotal
    return {...conta, saldoTotal: saldo - totalCompras, compras:[]}
    })
    return resultado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let consultaPorOrdemAlfabetica = consultas.sort().map((consulta) => consulta) 
    return consultaPorOrdemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   let resultado = consultas.sort((primeiraConsulta, segundaConsulta) => {
        return new Date(primeiraConsulta.dataDaConsulta.split("/").reverse()).getTime() -
        new Date(segundaConsulta.dataDaConsulta.split("/").reverse()).getTime()
   })
   return resultado
}