import { PostBusiness } from "../src/business/PostBusiness"
import { BaseError } from "../src/errors/BaseError"
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IRemoveLikeInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    // getPosts

    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(4)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Erro ao inserir 'token' inválido", async () => {
        expect.assertions(2)

        try {
            
            const input: IGetPostsInputDTO = {
                token: "token-mock-normals"
            }

            await postBusiness.getPosts(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    // createPost

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")
    })

    test("Erro ao inserir um 'token' inválido", async() => {
        expect.assertions(2)

        try {
            
        const input:ICreatePostInputDTO = {
            token: "token-mock-normals",
            content: "Teste do mock"
        }

        await postBusiness.createPost(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }

    })

    // deletePost

    test("Deve ser possível deletar um post", async () => {
        const input: IDeletePostInputDTO = {
            token: "token-mock-normal",
            postId: "204"
        }
        const response = await postBusiness.deletePost(input)

        expect(response.message).toBe("Post deletado com sucesso")

    })
    test("Erro quando não existir um determinado 'post'", async () => {
        expect.assertions(2)

        try {
            
            const input: IDeletePostInputDTO = {
                token: "token-mock-normal",
                postId: "202"
            }

            await postBusiness.deletePost(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Post não encontrado")
            }            
        }
    })

    // addLike

    test("Deve ser possível adicionar likes", async () => {
        const input:IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId: "203"
        }
        const response = await postBusiness.addLike(input)

        expect(response.message).toBe("Like realizado com sucesso")
    })

    test("Erro ao tentar dar like novamente", async () => {
        expect.assertions(2)

        try {
            
            const input:IAddLikeInputDTO = {
                token: "token-mock-normal",
                postId: "201"
            }

        await postBusiness.addLike(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Já deu like")
            }
        }
    })

    // removeLike

    test("Deve ser possível remover likes", async () => {
        const input:IRemoveLikeInputDTO = {
            token: "token-mock-normal",
            postId: "204"
        }
        const response = await postBusiness.removeLike(input)

        expect(response.message).toBe("Like removido com sucesso")
    })

    test("Erro ao tentar remover um like que não existe", async () => {
        expect.assertions(2)

        try {
            const input:IRemoveLikeInputDTO = {
                token: "token-mock-normal",
                postId: "203"
            } 

            await postBusiness.removeLike(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Ainda não deu like")
            }
        }
    })
})