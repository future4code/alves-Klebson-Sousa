// Herança

// - Exercício 1

// Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas.
// Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o
//     nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email
//     desse usuário.

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// Não, pois ela é privada e só tenho acesso a ela dentro da classe.

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no
// terminal?*
// Uma vez.

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`;
  }
}
const user: User = new User("10", "nomeTeste@gmail.com", "NomeTeste", "12345");
console.log(
  "email:",
  user.getEmail(),
  ", Id:",
  user.getId(),
  ", Nome:",
  user.getName()
);

//   Exercício 2
// Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas.
// Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com
// as informações que você quiser). Atente-se ao fato de que o `Customer` é uma
// subclasse (ou classe filha) da classe `User`. Sabemos disso porque há a palavra
// `extends` na declaração da classe `Customer`; e, em seu construtor, foi usado o
// `super`.

// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa
// no terminal?*
// Somente uma vez

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no
// terminal? Por quê?*
// Duas vezes, porque é chamada a classe User e depois é herdada por Customer e chamado novamente.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer: Customer = new Customer(
  "11",
  "teste2@gmail.com",
  "Teste2",
  "12345",
  "111111"
);

// - Exercício 3

// Agora, imprima **todas as informações possíveis** da instância que você criou: o
// id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de
// crédito (`creditCard`). Perceba que as propriedades públicas da classe pai
// (`User`) foram "herdadas" pela classe filha (`Customer`).

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// *Por quê?*
// Não, pois ela é private e só consigo acessar na classe User que é a principal.

console.log(
  customer.introduceYourself(), // 4.
  "\nId:",
  customer.getId(),
  "\nNome:",
  customer.getName(),
  "\nemail:",
  customer.getEmail(),
  "\nValor total da compra:",
  customer.purchaseTotal,
  "\nNúmero do Cartão:",
  customer.getCreditCard()
);

// - Exercício 4

// Adicione um método público à classe `User`. Esse método deve ter o nome de
// `introduceYourself`("apresente-se") e deve retornar a mensagem: `"Olá, bom dia!"`.
// As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para
// realizar o teste dessa sua função, faça com que a instância que você criou para a
// classe `Customer` chame esse método

// - Exercício 5

// Altere o método que você acabou de criar para que ele imprima a mensagem:
// `"Olá, sou ${nome do usuário}. Bom dia!"`. Realize os mesmos testes anteriores.

// Poliformismo

// - Exercício 1

// Vamos começar analisando a **interface** Client. Ela possui 4 atributos explicados
// abaixo.

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}


// Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você 
// terá que dar uma implementação para o método `calculateBill()`. Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.

// a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por 
// que isso aconteceu?*
// Consegui imprimir todas, pois nenhuma é private

const client: Client = {
  name: "Teste3",
  registrationNumber: 1,
  consumedEnergy: 250,
  calculateBill: () => {
    return 2;
  },
};
console.log(
  client.name,
  client.registrationNumber,
  client.consumedEnergy,
  client.calculateBill()
);


// - Exercício 2
    
// Agora, vamos ver a classe **Place**.

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

// Essa classe é abstrata porque está representando um tipo de informação que simplesmente 
// abstrai e armazena as características em comum de um conjunto de outras classes. Por 
// ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação 
// Orientada a Objetos e válida para todas as linguagens.
// a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: 
//     `new Place(...)`). Qual foi o erro que o Typescript gerou?*
// const place: Place =  new Place("2222222")
// Não é possível criar uma instância de uma classe abstrata

// b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma 
// instância dessa classe?*
// Acredito que como não é possível fazer uma instância de uma classe AbstractRange, teria 
// que fazer uma classe filha e atribuir a ela como herança, e na filha fazer a instância.

// - Exercício 3
    
//     Esse exercício vai responder melhor a essas três perguntas: 
    
//     1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da 
//     classe Place? (última pergunta do exercício anterior)*
    
//     2) *Por que a `Place` não é uma interface?*
    
//     3) *Por que a classe `Place` é uma Classe Abstrata?*
    
//     Será um pouco mais longo, mas esperamos que seja esclarecedor.
    
//     Vamos começar lendo três classes. 
    
//     A primeira representa uma casa residencial. Vamos armazenar nela uma variável para 
//     representar a quantidade de moradores (`residentsQuantity`)

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    
    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }

  }
  const residence: Residence = new Residence(5, "27.273-260")
  console.log("Cep residência", residence.getCep())

//   A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para 
//   representar os andares desse lugar comercial (`floorsQuantity`)

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }

  }

  const commerce: Commerce = new Commerce(8, "27.273-261")
  console.log("Cep Comércio", commerce.getCep())

//   A última é para uma indústria e adicionaremos uma propriedade para guardar a 
//   quantidade máquinas de lá (machinesQuantity)

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }

  }

  const industry: Industry = new Industry(8, "27.273-261")
  console.log("Cep indústria", industry.getCep())

// Agora, crie uma instância de cada uma das classes novas. Imprima no console o CEP de 
// cada uma delas, através do método `getCep` herdado da classe `Place`. Devido à 
// propriedade do **Polimorfismo**, uma classe filha de uma classe pai é também do mesmo 
// **tipo** da pai. Ou seja, a `Residence`, a `Commerce` e a `Industry` são do tipo 
// Place`. Dessa forma, uma instância da `Residence` também é uma instância da classe 
//  `Place`. Uma instância da `Commerce` também é da classe `Place` (o mesmo se aplica 
// para a `Industry`). **Isso responde à primeira pergunta**: para criar uma instância 
// de uma classe abstrata precisamos declarar uma classe filha e criar uma instância 
// dessa última.

// As residências, os comércios e as indústrias são lugares muito diferentes. Tendem a ter 
// arquiteturas muito distintas, porque são para propósitos diferentes. Quando estamos 
// modelando e encontramos uma situação dessa - três "entidades" muito diferentes - **é um 
// indício de que cada uma pode ter a sua própria classe;** assim, teremos mais liberdade 
// para criar os métodos, as propriedades e os construtores para cada uma da melhor forma. 

// Para exemplificar isso, criamos propriedades diferentes bem simples: quantidade de 
// moradores, quantidade de andares e quantidade de máquinas. Só que há uma propriedade 
// que todas elas possuem em comum: o CEP. Isso **sugere que criemos uma estrutura para 
// armazenar esse dado: uma classe pai ou uma interface**. Qual escolher? Há vários 
// motivos para a nossa escolha, mas aqui vamos explicar apenas um dos que a  justificam. 
// As propriedades que uma classe herda de uma interface são **sempre públicas**. Logo, 
// não temos a liberdade de modificar o acesso delas. No nosso caso, estamos representando 
// lugares, certo? Um lugar é fixo, tem um endereço e um CEP que não mudam. Dessa forma, 
// não vamos precisar modificar esse valor ao longo da nossa aplicação. Então o CEP 
// deveria ser `protected` ou `private` para não darmos essa possibilidade. Não existe uma 
// regra para escolher entre `protected` e `private`, mas deixamos `protected` só para 
// facilitar o acesso a essa propriedade para as classes filhas, dado que é um dado 
// importante e que **talvez** precise ser lido por elas. **Isso responde à segunda 
// pergunta**: `Place` é uma classe porque precisa ter um acesso restrito a um dos 
// seus atributos, o que é impossível de se fazer em interfaces.

// Por fim, ela é abstrata por um motivo simples. O nosso sistema possui 3 tipos de lugares
//  e preferimos criar uma classe para representar cada um deles. Então não há motivos 
// para querermos instanciar um objeto do tipo `Place` porque, no nosso contexto, todos os 
// casos deles já estão cobertos por outras classes. **Isso responde à terceira pergunta**: 
// `Place` é abstrata porque não enxergamos uma situação em que seria necessário criar uma 
// instância dessa classe.

// Ufa! 😪 

// Antes de prosseguir, veja se entendeu tudo e não ficou com alguma dúvida. Foi muita 
// informação de uma vez só.  

// A parte prática desse exercício é tranquila: crie os getters de cada uma das 
// propriedades protegidas dessas três classes.

// - Exercício 4
    
// Agora, você vai começar a colocar a mão na massa!
    
// Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). Ela deve possuir uma 
// propriedade de CPF, que será privada, uma vez que o CPF não pode mudar e não teremos uma classe filha da 
// `ResidentialClient` (assim, `protected` não faz sentido). Crie o getter também.
    
// Essa classe deve ser **filha** da classe `Residence` e implementar a classe `Client`. Lembre-se que a 
// classe deve implementar todos métodos e atribuir valores a todas as propriedades que herda da interface. 
// No caso das residências, o valor da conta é **(quantidade de energia) x 0.75.**
    
// a) *Que métodos e propriedades essa classe possui? Por quê?*
// Possui todos os métodos e propriedades a classe Residence e interface Client por ter herdado como filha da 
// Residence e por implementar a interface Client

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string, 
        public residentsQuantity: number,
        public cep: string
    ){
        super (residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill = (): number => {
        return this.consumedEnergy * 0.75
    }
}

// - Exercício 5
    
// Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado). 
// Crie os getter dela.
    
// Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`. Nesse caso, o valor 
// da conta é **(quantidade de energia) x 0.53.**
    
// a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*
// Ambas herdam os mesmos métodos da interface Client, e propriedades que seus pais herdam de Place.
    
// b) *Quais as diferenças dessa classe com a `ResidentialClient`?*
// A CommercialClient herda a propriedade  floorsQuantity da classe Commerce e, ResidentialClient herda a 
// propriedade residentsQuantity da classe Residence

class CommercialClient  extends Commerce  implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private CNPJ: string, 
        public floorsQuantity: number,
        public cep: string
    ){
        super (floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.CNPJ
    }

    public calculateBill = (): number => {
        return this.consumedEnergy * 0.53
    }
}

// - Exercício 6
    
// Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial. Ele deve possuir um um 
// número de registro industrial (privada). Crie somente os getters dela.
    
// a) *De* qual classe a `IndustrialClient` deve ser filha? Por quê?*
// Deve ser filha da classe Industry, pois se refere à indústria.
    
// b) *Que interface a `IndustrialClient` implementa? Por quê?*
// Ela implementa a interface Client, porque herda suas propriedades que são relacionadas a cliente.
    
// c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os 
// getters?*
// Por que s´queremos pegar os dados dos clientes e não modificar.
class IndustrialClient  extends Industry  implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string, 
        public machinesQuantity: number,
        public cep: string
    ){
        super (machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.industryNumber
    }

    public calculateBill = (): number => {
        return this.consumedEnergy * 0.53 + this.machinesQuantity*100
    }
}

const industrialClient: IndustrialClient = new IndustrialClient("Rara", 1, 100, "123", 5, "124563")
console.log(industrialClient.calculateBill())