// 1.
// a) Responda como comentário no seu código:
// como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Usamos a propriedade process.argv

// b) Crie um programa que receba seu nome e sua idade.
// Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

const nome = process.argv[2];
const idade = Number(process.argv[3]);

const nomeIdade = (arg1, arg2) => {
  if (!arg1 || !arg2) {
    return `Esperava dois parâmetros, só recebi um.`
  } else {
    return `Olá, ${arg1}! Você tem ${arg2} anos`;
  }
};

console.log(nomeIdade(nome, idade))

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

const nomeIdade2 = (arg1, arg2) => {
  const novaIdade = arg2 + 7;
  if (!arg1 || !arg2) {
    return `Esperava dois parâmetros, só recebi um.`
  } else {
    return `Olá, ${arg1}! Você tem ${arg2} anos. Em sete anos você terá ${novaIdade}`;
  }
};
console.log(nomeIdade2(nome, idade))
