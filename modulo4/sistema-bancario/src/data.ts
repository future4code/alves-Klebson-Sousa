// 3. Crie mais um **tipo**: para representar as **transações** que serão salvas no 
// extrato

export type TRANSACTION = {
    value: number,
    data: string,
    description: string
}

// 1. Crie um tipo para representar uma conta para o usuário

export type Account = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: TRANSACTION[]
}

// 2. Crie um array global que armazene usuários na aplicação. Caso queira, pode 
// iniciar este array com valores pré-definidos.
// 4. Dentro da definição do usuário, crie um array que armazene as transações de um 
// cliente.

export const accountUsers: Account[] = []

