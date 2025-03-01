// 6. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital.
// Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos
// clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista
// contendo todas os débitos realizados pelo cliente. Exemplo:

// entrada
[
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando
// de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este array como
// parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os
// clientes com saldo negativo.

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const contas: Cliente[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const clientesComSaldosNegativos = (contas: Cliente[]): Cliente[] => {
    contas.forEach((cliente) => {
        let soma = 0
        // for (let i = 0; i <= cliente.debitos.length - 1; i++) {
        //     soma += cliente.debitos[i]
        // } // ou
        const somaDeDebitos = cliente.debitos.reduce((a, b) => {
            return a + b
        }, soma)

        cliente.saldoTotal = cliente.saldoTotal - somaDeDebitos
        // cliente.saldoTotal = cliente.saldoTotal - soma
        cliente.debitos = []
    })
    const listaDeSaldosNegativos = contas.filter((cliente) => {
        return cliente.saldoTotal < 0
    })
    return listaDeSaldosNegativos
}

console.log(clientesComSaldosNegativos(contas))