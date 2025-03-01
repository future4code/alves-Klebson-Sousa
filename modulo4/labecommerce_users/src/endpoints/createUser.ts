import { Request, Response } from "express"
import insertUser from "../data/insertUser"
import { CreateUser, User } from "../types/typesUsers"


const createUser = async(req: Request, res: Response) => {
    try {
        const {name, email, password}: CreateUser = req.body

        if (!name || !email || !password) {
            res.status(422)
            throw new Error("Os parâmetros nome, email, e senha, são obrigatórios.")
        }

        const user: User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        const result = await insertUser(user)

        res.status(201).send("Usuário criado com sucesso!")

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}
export default createUser