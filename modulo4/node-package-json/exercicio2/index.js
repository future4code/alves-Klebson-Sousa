// 2. Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const valor1 = Number(process.argv[3]);
const valor2 = Number(process.argv[4]);
const operacao = process.argv[2];
const calculo = (operacao, num1, num2) => {
  if (operacao && !num1 && !num2) {
    return `Esperava 3 parâmetros, só recebi um.`
  } else if (operacao && num1 && !num2) {
    return `Esperava 3 parâmetros, só recebi dois.`
  } else {
  let resultado = 0;
  switch (operacao) {
    case "somar":
      resultado = num1 + num2;
      return resultado;
      break;
    case "subtrair":
      resultado = num1 - num2;
      return resultado;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      return resultado;
      break;
    case "dividir":
      resultado = num1 / num2;
      return resultado;
      break;
  }}
};
console.log(calculo(operacao, valor1, valor2));