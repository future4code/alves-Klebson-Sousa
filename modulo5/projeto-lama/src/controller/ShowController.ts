import { Request, Response } from "express"
import { ShowBusiness } from "../business/ShowBusiness"
import { BaseError } from "../errors/BaseError"
import { ICreateShowInputDTO } from "../models/Show"

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization as string,
                band: req.body.band,
                startsAt: req.body.starts_at
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
        } catch (error) {            
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar Show" })
        }
    }

    public getShow = async (req: Request, res: Response) => {
        try {            
            const response = await this.showBusiness.getShow()
            res.status(200).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar Shows" })
        }
    }

}