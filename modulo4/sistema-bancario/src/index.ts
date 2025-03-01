import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Account, accountUsers, TRANSACTION } from "./data";

const app: Express = express();

app.use(cors());
app.use(express.json());

// 6. Crie um método `GET` na entidade `users` função que será responsável por pegar
// todos os usuários existentes no array de usuários.

app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    if (!accountUsers.length) {
      codeError = 404;
      throw new Error("Nenhuma conta encontrada");
    }
    res.status(200).send(accountUsers);
  } catch (error: any) {
    res.status(codeError).send(error.message);
  }
});

// 5. Crie um endpoint que utilize o método `POST` da entidade `users` que será
// responsável por cadastrar um usuário em um array de usuários. Neste momento, não se
// preocupe, com as validações descritas nas funcionalidades. e
// 7.
// Desafio 1.
app.post("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const { name, cpf, formatDate } = req.body;
    const [day, month, year] = formatDate.split("/");
    const birthDate: Date = new Date(`${year}-${month}-${day}`);

    const age: number = Date.now() - birthDate.getTime();
    const newAge: number = age / 1000 / 60 / 60 / 24 / 365;

    if (newAge <= 18) {
      codeError = 406;
      throw new Error(
        "Para criar uma conta, é preciso ter idade mínima de 18 anos"
      );
    }

    const account = accountUsers.find((user) => user.cpf === cpf);
    if (account) {
      codeError = 409;
      throw new Error("Já existe uma conta com este cpf!");
    }

    accountUsers.push({
      name: name,
      cpf: cpf,
      birthDate: birthDate,
      balance: 0,
      statement: [],
    });
    res.status(200).send("Conta criada com sucesso!");
  } catch (error: any) {
    res.status(codeError).send(error.message);
  }
});

// 7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do
// que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

// Desafio
// 1. Adicione mais uma validação na função do item 1 (Criar conta): verifiquem se o CPF
// passado já não está atrelado a alguma conta existente.

// 2. Crie um endpoint `get` que receba um CPF como parâmetro e retorne o saldo da
// conta do usuário dono daquele CPF. A informação deve ser igual ao que estiver salvo
// no sistema. Se for diferente, exiba uma mensagem de erro.

app.get("/users/saldo/:cpf", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const { cpf } = req.params;
    const user = accountUsers.filter((us) => {
      return us.cpf === cpf;
    }).map((us) => {
        return us.balance
    })
    if (!cpf) {
      codeError = 404;
      throw new Error("Usuário não encontrado");
    }

    
    
    res.status(200).send(user);
  } catch (error: any) {
    res.status(codeError).send(error.message);
  }
});

// 3. Crie um endpoint `put` que receba um nome, um CPF e um valor. Ele deve adicionar 
// o valor ao saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no 
// sistema Se algum dos dados for diferente, exiba uma mensagem de erro.
// 4. Altere o endpoint de adicionar saldo para que ela adicione um item ao extrato da 
// conta do usuário: indicando o **valor** e a **data** da transação. A descrição para 
// este tipo de item deve ser sempre a mesma ("Depósito de dinheiro"). A data pode ser 
// salva como timestamp ou string.

app.put("/users/:cpf/:name/deposit", (req: Request, res: Response) => {
  let codeError: number = 400;

  try {

    const {cpf, name} = req.params
    const {value, description} = req.body
    let {date} = req.body
    
    const [day, month, year] = date.split('/')
    const dateFormatted = new Date(`${year}-${month}-${day}`)

    if (!cpf || !name || !value || !description || !date) {
        res.statusCode = 400
        throw new Error("Não foi possível atualizar o cliente, passou algum dado não preenchido")
    }

    const clientIndex = accountUsers.findIndex(client => client.cpf === cpf && client.name.toLowerCase() === name.toLowerCase())

   
    if (clientIndex < 0) {
        res.statusCode = 404
        throw new Error("Não foi possível atualizar o cliente, não existe um cliente cadastrado com esse CPF e nome")
    }

    accountUsers[clientIndex].statement.push({
        value,
        date: dateFormatted,
        description
    })
    
    res.status(200).send("Deposito realizado com sucesso")
}catch (error: any) {
    res.status(codeError).send(error.message);
  }
})

// 5. Crie um endpoint `post` que permita ao cliente pagar uma conta. Ela deve receber 
// uma data de vencimento da conta, uma descrição, um valor e o CPF do 
// titular; e salvar uma transação no extrato da conta correspondente. O saldo do usuário 
// não deve ser atualizado neste momento. Caso nenhuma **data** seja passada, considere que o pagamento deve ser feito **hoje**.

//7. Adicione uma validação ao endpoint de pagar conta: o usuário não pode colocar uma 
// data que já passou.
// 8. Adicione mais uma validação ao endpoint de pagar conta: o usuário não pode tentar 
// fazer um pagamento cujo valor seja maior do que seu saldo atual.

app.post("/users/:cpf/payment", (req: Request, res: Response) => {
    try {

        const cpf = req.params.cpf
        const {value, description} = req.body
        let {date} = req.body

        if (!date) {
            date = Date.now()
        }

        const [day, month, year] = date.split('/')
        const dateFormatted = new Date(`${year}-${month}-${day}`)

        if (!value || !description) {
            res.statusCode = 400
            throw new Error("Não foi possível realizar o pagamento, passou algum dado não preenchido")
        }

        const clientIndex = accountUsers.findIndex(client => client.cpf === cpf)
        
        
        if (clientIndex < 0) {
            res.statusCode = 404
            throw new Error("Cliente não encontrado")
        }

        const client = accountUsers[clientIndex]

        
        const newTransaction: TRANSACTION = {
            value,
            date: dateFormatted,
            description
        }

       
        if (Math.abs(value) > client.balance) {
            res.statusCode = 406
            throw new Error("Saldo insuficiente")
        }

        client.statement.push(newTransaction)
        
        res.status(201).send("Pagamento realizado com sucesso")
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

// 6. Crie um novo endpoint `put` responsável por atualizar o saldo de um cliente. Para 
// isto, percorra os itens do extrato e atualize o saldo somente para as contas cujas 
// datas são anteriores a hoje.

app.put("/users/:cpf/:name/balance", (req: Request, res: Response) => {
    try {

        const {cpf, name} = req.params

        if (!cpf || !name) {
            res.statusCode = 400
            throw new Error("Não foi possível atualizar o cliente, passou algum dado não preenchido")
        }

        const clientIndex = accountUsers.findIndex(client => client.cpf === cpf && client.name.toLowerCase() === name.toLowerCase())
        
        if (clientIndex < 0) {
            res.statusCode = 404
            throw new Error("Não foi possível atualizar o cliente, não existe um cliente cadastrado com esse CPF e nome")
        }

        let newBalance = accountUsers[clientIndex].balance

        accountUsers[clientIndex].statement.forEach(balance => {
            newBalance += balance.value
        }
        )

        accountUsers[clientIndex].balance = newBalance

        res.status(200).send("Saldo atualizado com sucesso")
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

// 9. Crie um endpoint `post` para permitir a transferência entre contas internas do 
// banco. O usuário deve informar o seu **nome**, o seu **CPF**, o **nome** do 
// destinatário, o **CPF** do destinatário e o **valor**. Para cada transferência, 
// criem um item do extrato para as duas contas envolvidas. Os saldos de ambas não devem 
// ser atualizadas neste momento. (O endpoint de atualizar saldo, que vocês implementaram, 
// já deve fazer isso).

// 10. Adicione uma validação para o endpoint de transferência entre contas: verificar se 
// o **saldo** do usuário é **suficiente** para a transferência. Se não for, exiba uma 
// mensagem de erro.

// 11. Adicione mais uma validação para a função de transferência entre contas: verificar 
// se ambas as contas (do **remetente** e **destinatário**) existem. Exibam uma mensagem de erro, se não existir.

app.post("/users/:cpf/:name/transfer", (req: Request, res: Response) => {
    try {

        const {cpf, name} = req.params
        const {nameDestination, cpfDestination} = req.body
        const {statement} = req.body
        const {value, description} = statement
        let {date} = statement

        const [day, month, year] = date.split('/')
        const dateFormatted = new Date(`${year}-${month}-${day}`)

        if (!cpf || !name || !nameDestination || !cpfDestination) {
            res.statusCode = 400
            throw new Error("Não foi possível realizar a transferência, passou algum dado não preenchido")
        }
        
        const clientIndex = accountUsers.findIndex(client => client.cpf === cpf && client.name.toLowerCase() === name.toLowerCase())

        // Verifica se o CPF e o name já está cadastrado, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
        if (clientIndex < 0) {
            res.statusCode = 404
            throw new Error("Não foi possível realizar a transferência, não existe um cliente cadastrado com esse CPF e nome")
        }

        const client = accountUsers[clientIndex]

        // O método Math.abs() retorna o valor absoluto de um número. O valor absoluto de um número é o valor sem sinal.
        if (Math.abs(value) > client.balance) {
            res.statusCode = 406
            throw new Error("Saldo insuficiente")
        }

        const clientDestinationIndex = accountUsers.findIndex(client => client.cpf === cpfDestination)

        // Verifica se o CPF, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
        if (clientDestinationIndex < 0) {
            res.statusCode = 404
            throw new Error("Não foi possível realizar a transferência, não existe um cliente cadastrado com esse CPF")
        }

        const clientDestination = accountUsers[clientDestinationIndex]

        const newTransaction: TRANSACTION = {
            value: - value,
            date: new Date(),
            description: `Transferência de ${client.name} para ${nameDestination}`
        }

        const newTransaction2: TRANSACTION = {
            value: value,
            date: new Date(),
            description: `Transferência de ${client.name} para ${nameDestination}`
        }

        client.statement.push(newTransaction)
        clientDestination.statement.push(newTransaction2)

        res.status(200).send("Transferência realizada com sucesso")
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})



app.listen(3003, () => {
  console.log("Servidor rodando em http://localhost:3003");
});
