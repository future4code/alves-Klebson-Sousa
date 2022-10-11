import { ShowBusiness } from "../src/business/ShowBusiness";
import { TicketDatabaseMock } from "./mocks/TicketDatabaseMock";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock";
import { ICreateShowInputDTO, Show } from "../src/models/Show";
import { BaseError } from "../src/errors/BaseError";

describe("Testando a ShowBusiness", () => {
  const showBusiness = new ShowBusiness(
    new ShowDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock(),
    new TicketDatabaseMock()
  );

  // getShow

  test("Deve retornar uma lista de shows", async () => {
    const response = await showBusiness.getShow();

    expect(response.shows.length).toBe(3);
    expect(response.shows[0]).toBeInstanceOf(Show);
  });

  // createShow

  test("Deve ser possível criar um novo show", async () => {
    const input: ICreateShowInputDTO = {
      token: "token-mock-admin",
      band: "Coragem",
      startsAt: new Date("2022-12-06"),
    };

    const response = await showBusiness.createShow(input);

    expect(response.message).toBe("Show criado com sucesso");
  });

  test("Erro ao inserir um token inválido", async () => {
    expect.assertions(2);

    try {
      const input: ICreateShowInputDTO = {
        token: "token-mock-norm",
        band: "nova",
        startsAt: new Date("2022-12-10"),
      };

      const response = await showBusiness.createShow(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Insira um token válido");
      }
    }
  });

  test("Erro quando 'band' for diferente do tipo string", async () => {
    expect.assertions(2);

    try {
      const input: ICreateShowInputDTO = {
        token: "token-mock-normal",
        band: undefined,
        startsAt: new Date("2022-12-10"),
      } as any;

      await showBusiness.createShow(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'band' inválido: deve ser uma string"
        );
      }
    }
  });

//   test("Erro ao tentar inserir mais de um show no mesmo dia", async () => {
//     expect.assertions(2);

//     try {
//       const input: ICreateShowInputDTO = {
//         token: "token-mock-admin",
//         band: "nova",
//         startsAt: new Date("2022-12-06")
//       } 

//       await showBusiness.createShow(input);

//     } catch (error) {
//       if (error instanceof BaseError) {
//         expect(error.statusCode).toBe(409);
//         expect(error.message).toBe("Já existe Show previsto para esta data");
//       }
//     }
//   });

test("Erro quando usuário normal tenta criar show", async () => {
    expect.assertions(2);

    try {
      const input: ICreateShowInputDTO = {
        token: "token-mock-normal",
        band: "nova",
        startsAt: new Date("2022-12-10"),
      }

      await showBusiness.createShow(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe(
            "Somente admin pode criar shows"
        );
      }
    }
  });
});

