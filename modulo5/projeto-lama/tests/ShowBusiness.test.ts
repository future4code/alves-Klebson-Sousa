import { ShowBusiness } from "../src/business/ShowBusiness"
import { TicketDatabaseMock } from "./mocks/TicketDatabaseMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { ShowDatabaseMock} from "./mocks/ShowDatabaseMock"
import { ICreateShowInputDTO, Show } from "../src/models/Show"


describe("Testando a ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock(),
        new TicketDatabaseMock()
    )

    test("Deve retornar uma lista de shows", async () => {
        const response = await showBusiness.getShow()
        
        expect(response.shows.length).toBe(3)
        expect(response.shows[0]).toBeInstanceOf(Show)
    })

    test("Deve ser possível criar um novo show", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-mock-admin",
            band: "Coragem",
            startsAt: new Date("2022-12-06")
        }

        const response = await showBusiness.createShow(input)

        expect(response.message).toBe("Show criado com sucesso")
        
    })
})