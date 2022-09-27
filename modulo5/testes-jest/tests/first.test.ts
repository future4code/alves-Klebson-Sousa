import {
  numeroPar,
  stringRetornaArray,
  minusulaParaMauscula,
  stringParaNumber,
  retornaQuantidadeCaracteres,
  retornaNumeroAleatorio,
  User,
  users,
  mediaArredondadaParCima,
  idadeAtual,
  formatarData
} from "../src/exercicios";

// ex. 0)
describe("Testando a função numeroPar", () => {
  test("Se o número for par, devolve true", () => {
    const input = 10;
    const result = numeroPar(input);
    expect(result).toBe(true);
  });
});

// ex.1

describe("Testando a função minusulaParaMauscula", () => {
  test("O parâmetro deve retorner a mesma em caixa alta", () => {
    const input = "teste";
    const result = minusulaParaMauscula(input);
    expect(result).toEqual("TESTE");
  });
});

// ex.2)

describe("Testando a função stringRetornaArray", () => {
  test("Se o parâmetro da função for uma string, ela retorna um array", () => {
    const input = "teste";
    const result = stringRetornaArray(input);
    expect(result).toEqual(["t", "e", "s", "t", "e"]);
  });
});

// ex.3)

describe("Testando a função stringParaNumber", () => {
  test("Se o parâmetro da função for um número no formato string, ela retorna um number", () => {
    const input = "10";
    const result = stringParaNumber(input);
    expect(result).toBe(10);
  });
});

// ex. 4)

describe("Testando a função retornaQuantidadeCaracteres", () => {
  test("Se o parâmetro da função for uma string, ela retorna um numero representando a quantidade de carscteres", () => {
    const input = "teste";
    const result = retornaQuantidadeCaracteres(input);
    expect(result).toBe(5);
  });
});

// ex. 5

describe("Testando a função retornaNumeroAleatorio", () => {
  test("A função deve retornar um número aleatório de acordo com os parâmetros", () => {
    const inputMin = 1;
    const inputMax = 10;
    const result = retornaNumeroAleatorio(inputMin, inputMax);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });
});

// ex. 6

describe("Teste para verificar usuário na lista", () => {
  test("O usuário 'Astrodev' deve existir na lista", () => {
    const user: User = {
      name: "Astrodev",
      eage: 30,
    };

    expect(users).toContainEqual(user);
  });
});

// ex. 7

describe("Testando a função mediaArredondadaParCima", () => {
  test("A função deve retornar a média arredondada para cima da lista de números inserida no paâmetro", () => {
    const input = [10, 4, 7, 6];
    const result = mediaArredondadaParCima(input);
    expect(result).toEqual(7)
  });
});

// ex. 8

describe("Testando a função idadeAtual", () => {
  test("A função recebe um ano de nascimento e retorna a idade atual", () => {
    const input = 2000;
    const result = idadeAtual(input);
    expect(result).toBe(22)
  });
});

// ex. 9

describe("Testando a função formatarData", () => {
    test("A função recebe uma data no formato “aaaa/mm/dd” e retorna outra string no formato “dd/mm/aaaa”", () => {
      const input = "2022/09/26";
      const result = formatarData(input);
      expect(result).toBe("26/09/2022")
    });
  });