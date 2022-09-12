// - Exercício 1

//     Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e
//     quais são privadas e responda as perguntas discursivas em comentários no arquivo
//     `index.ts`

//     a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
// Ele permite inicializar  campos internos da classe e alocar recursos que um objeto
// da classe possa demandar, é declarado como uma função e chamamos através da classe

//     b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa
//     classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem
//     `"Chamando o construtor da classe User"` foi impressa no terminal?*
//     apenas uma vez

//     c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
//     Podemos acessar somente dentro da própria classe

// 2. 

class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }
  public setDescription(newDescription: string) {
   this.description = newDescription
  }
  public getValue(): number {
    return this.value;
  }
  public getDate(): string {
    return this.date;
  }
}

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number, transactions: Transaction[]) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    this.transactions = transactions
  }
  public getCpf(): string {
    return this.cpf;
  }
  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public getTransation(): Transaction[] {
    return this.transactions;
  }
}



const newTransaction: Transaction = new Transaction("10/08/2025", 400, "testando nova transaction")

const user: UserAccount = new UserAccount("011.111.111-00", "Sicrano", 35, [newTransaction]);



3.

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccounts(): UserAccount[]{
        return this.accounts
    }
    public getAccount(index: number): UserAccount{
        return this.accounts[index]
    }



  }
  const bank: Bank = new Bank([user])

  console.log(bank.getAccounts()[0].getTransation()[0].getDescription())


  console.log(bank.getAccounts()[0].getTransation()[0].setDescription("Testando com nova descrição"))
  console.log(bank.getAccounts()[0].getTransation()[0].getDescription())

console.log(bank.getAccount(0))