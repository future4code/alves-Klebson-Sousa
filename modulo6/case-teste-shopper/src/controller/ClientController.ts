import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { BaseError } from "../errors/BaseError";
import { ISignupInputDTO } from "../model/Client";

export class ClientController {
    constructor(
        private clientBusiness: ClientBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                deliveryDate: req.body.deliveryDate
            }

            const response = await this.clientBusiness.signup(input)
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            }
            res.status(500).send({message: "Erro inesperado ao inserir dados"})
        }
    }
}