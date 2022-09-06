import { Request, Response } from "express";
import getAddressInfo from "../service/getAdressInfo";


export const getAddress = async (req: Request, res: Response) => {
    try{
        const {cep} = req.params
        const result = await getAddressInfo(cep)
        if (!result) {
            res.statusCode = 404
            throw new Error("Endereço não encontrado")
        }
        res.status(200).send(result)
        
    } catch (error: any) {
        res.status(500).send(error.menssage)
    }
}