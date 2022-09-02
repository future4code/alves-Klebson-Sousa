import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await selectAllUsers()

        if(!users.length){
            res.status(404)
            throw new Error("Não foi encontrado nenhum usuário!")
        }
        
        res.status(200).send(users)
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}

export default getAllUsers