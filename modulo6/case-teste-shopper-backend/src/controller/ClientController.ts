import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { BaseError } from "../errors/BaseError";
import { ISignupInputDTO } from "../model/Client";
import { IOrderInputDTO} from "../model/Order";

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

    public createListPurchases = async (req: Request, res: Response) => {
        try {
            const input: IOrderInputDTO = {
                listPurchase: req.body.listPurchase
            }

            const idClient: string = req.params.id 
           

            const response = await this.clientBusiness.createListPurchases(input, idClient)
            
            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }    

    public getListPurchases = async (req: Request, res: Response) => {
        try {
            const idClient: string = req.params.id
           

            const response = await this.clientBusiness.getListPurchases(idClient )
            
            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}