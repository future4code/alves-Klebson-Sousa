import { UserBusiness } from "../src/business/UserBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock} from "./mocks/UserDatabaseMock"


describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    // signup

    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Erro no cadastro quando 'name' for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: undefined,
                email: "fulano@gmail.com",
                password: "fulano123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: deve ser uma string")
            }
        }
    })

    test("Erro no cadastro quando 'name' tiver menos de 3 caracteres", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "fu",
                email: "fulano@gmail.com",
                password: "fulano123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("Erro no cadastro quando 'password' for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "fulano",
                email: "fulano@gmail.com",
                password: undefined
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: deve ser uma string")
            }
        }
    })
    
    test("Erro no cadastro quando 'email' for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "fulano",
                email: undefined,
                password: "fulano123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido: deve ser uma string")
            }
        }
    })
    
    test("Erro no cadastro quando 'email' não tiver parâmetros como @", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "fulano",
                email: "fulanogmail.com",
                password: "fulano123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Erro no cadastro quando 'email' já foi cadastrado", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "fulano",
                email: "astrodev@gmail.com",
                password: "fulano123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Já existe um cadastro com esse email")
            }
        }
    })

    test("Erro no cadastro quando 'password' for menor que 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "fulano",
                email: "fulano@gmail.com",
                password: "123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })

    // login

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    test("Erro quando 'password' possuir menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: "123"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })

    test("Erro no login quando 'password' for incorreto", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "bananinha123"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Password incorreto")
            }
        }
    })

    test("Erro no login quando 'email' for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: undefined,
                password: "fulano123"
            } as any

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido: deve ser uma string")
            }
        }
    })
    
    test("Erro no login quando 'email' não encontrado", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: "fulano123"
            } 

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Usuário não cadastrado")
            }
        }
    })

    test("Erro no login quando 'password' for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: undefined
            } as any

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: deve ser uma string")
            }
        }
    })

    test("Erro no login quando 'password' for incorreto", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "bananinha12"
            } as any

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Password incorreto")
            }
        }
    })
   
})
