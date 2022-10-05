import { PersonBusiness } from "../../src/business/PersonBusiness"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { PersonDatabaseMock } from "../mocks/PersonDatabaseMock"

describe("Testando getPerson da PersonBusiness", () => {
    const personBusiness = new PersonBusiness(
        new PersonDatabaseMock(),
        new IdGeneratorMock()
    )

    test("Caso de sucesso", async () => {
        const response = await personBusiness.getPerson()

        expect(response.persons.length).toEqual(3)       
        expect(response.persons[0].getFirstName()).toEqual("João")       
    })
})