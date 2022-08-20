import express, {Express, Request, Response} from "express"
import cors from "cors";
import { Account, accountUsers, TRANSACTION } from "./data";

const app: Express = express()

app.use(cors())
app.use(express.json())

// 6. Crie um método `GET` na entidade `users` função que será responsável por pegar 
// todos os usuários existentes no array de usuários.

app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        res.status(200).send(accountUsers)
    } catch (error: any) {
        res.status(codeError).send(error.message)
    }
})

// 5. 
app.post("/users", (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const {name, cpf, birthDate} = req.body
        // const formatDate = birthDate.split("/")

        accountUsers.push({
            name: name,
            cpf: cpf,
            birthDate: birthDate, 
            balance: 0,
            statement: []
        })
        res.status(200).send("Conta criada com sucesso!")
    } catch (error: any) {
        res.status(codeError).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})