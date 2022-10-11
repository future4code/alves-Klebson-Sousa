import { PersonBusiness } from "../../src/business/PersonBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IPersonInputDTO } from "../../src/models/Person"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { PersonDatabaseMock } from "../mocks/PersonDatabaseMock"

describe("Testando insertData da PersonBusiness", () => {
    const personBusiness = new PersonBusiness(
        new PersonDatabaseMock(),
        new IdGeneratorMock()
    )

    test("Caso de sucesso", async () => {
        const input: IPersonInputDTO = {            
            firstName: "Joaquin",
            lastName: "Parente",
            participation: 25
        }

        const response = await personBusiness.insertData(input)

        expect(response.message).toBe("Dados inseridos com sucesso")        
       
    })

    test("Erro ao deixar de inserir um dos parâmetros no body", async () => {
        try {
            const input: any= {            
                firstName: "",
                lastName: "",
                participation: undefined
            }

        await personBusiness.insertData(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Os campos firstName, lastName e participation são obrigatórios")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("Erro ao inserir firstName diferente de string", async () => {
        try {
            const input: any= {            
                firstName: 2,
                lastName: "Parente",
                participation: 25
            }

        await personBusiness.insertData(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Parâmetro 'firstName' inválido: deve ser uma string")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("Erro ao inserir lastName diferente de string", async () => {
        try {
            const input: any= {            
                firstName: "Joaquin",
                lastName: 2,
                participation: 25
            }

        await personBusiness.insertData(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Parâmetro 'lastName' inválido: deve ser uma string")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("Erro ao inserir participation diferente de número", async () => {
        try {
            const input: any= {            
                firstName: "Joaquin",
                lastName: "Parente",
                participation: "25"
            }

        await personBusiness.insertData(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Parâmetro 'participation' inválido: deve ser número")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("Erro ao inserir dados já existentes", async () => {
        try {
            const input: IPersonInputDTO= {            
                firstName: "Jo",
                lastName: "BB",
                participation: 30   // ???????
            }

        await personBusiness.insertData(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Dados já inseridos")
                expect(error.statusCode).toEqual(409)
            }
        }
    })

})