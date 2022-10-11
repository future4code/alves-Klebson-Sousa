import { TicketBusiness } from "../src/business/TicketBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ICreateTicketInputDTO, IDeleteTicketInputDTO } from "../src/models/Show";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock";
import { TicketDatabaseMock } from "./mocks/TicketDatabaseMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a TicketBusiness", () => {
  const ticketBusiness = new TicketBusiness(
    new TicketDatabaseMock(),
    new ShowDatabaseMock(),
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

// reservation

  test("Deve ser possível fazer uma reserva para um show", async () => {
    const input: ICreateTicketInputDTO = {
      token: "token-mock-admin",
      showId: "202",
    };

    const response = await ticketBusiness.reservationTicket(input);

    expect(response.message).toBe("Reserva feita com sucesso");
  });

  test("Erro ao deixar de inserir o id do show", async () => {
    expect.assertions(2)

    try {
        const input: ICreateTicketInputDTO = {
        token: "token-mock-admin",
        showId: undefined
    } as any

    const response = await ticketBusiness.reservationTicket(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro showId  deve ser passado")
        }
    }
    
  })

  test("Erro ao inserir um token inválido", async () => {
    expect.assertions(2)

    try {
        const input: ICreateTicketInputDTO = {
        token: "token-mock-norm",
        showId: "202"
    }

    const response = await ticketBusiness.reservationTicket(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Insira um token válido")
        }
    }
    
  })
  
  test("Erro ao inserir um id de um show inexistente", async () => {
    expect.assertions(2)

    try {
        const input: ICreateTicketInputDTO = {
        token: "token-mock-normal",
        showId: "200"
    }

    const response = await ticketBusiness.reservationTicket(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Show não encontrado, verifique se o id está correto")
        }
    }
    
  })

  test("Erro ao tentar criar mais de uma reserva por usuário", async () => {
    expect.assertions(2)

    try {
        const input: ICreateTicketInputDTO = {
        token: "token-mock-normal",
        showId: "201"
    }

    const response = await ticketBusiness.reservationTicket(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(409)
            expect(error.message).toBe("Permitido somente uma reseva por usuário")
        }
    }
    
  })

// deleteReservation
  
  test("Deve ser possível cancelar uma reserva para um show", async () => {
    const input: IDeleteTicketInputDTO = {
      token: "token-mock-admin",
      showId: "201",
    };

    const response = await ticketBusiness.deleteReservation(input);

    expect(response.message).toBe("Reserva deletada com sucesso");
  });

  test("Erro ao inserir um token inválido", async () => {
    expect.assertions(2)

    try {
        const input: ICreateTicketInputDTO = {
        token: "token-mock-norm",
        showId: "201"
    }

    const response = await ticketBusiness.deleteReservation(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Insira um token válido")
        }
    }    
  })

  test("Erro ao inserir um id de um show inexistente", async () => {
    expect.assertions(2)

    try {
        const input: ICreateTicketInputDTO = {
        token: "token-mock-normal",
        showId: "200"
    }

    const response = await ticketBusiness.deleteReservation(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Show não encontrado, verifique se o id está correto")
        }
    }    
  })

  test("Erro ao tentar cancelar uma reserva inexistente", async () => {
    expect.assertions(2)

    try {
        const input: ICreateTicketInputDTO = {
        token: "token-mock-admin",
        showId: "202"
    }

    const response = await ticketBusiness.deleteReservation(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(409)
            expect(error.message).toBe("Ainda não criou uma reserva")
        }
    }
    
  })

});
