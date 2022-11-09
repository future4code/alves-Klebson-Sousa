import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { BaseError } from "../errors/BaseError";
import { IDeletePizzaInputDTO, IInsertPizzaInputDTO } from "../models/Pizza";

export class PizzaController {
    constructor(
        private pizzaBusiness: PizzaBusiness
    ) {}

    public insertPizza = async (req: Request, res: Response) => {
        try {
            const input: IInsertPizzaInputDTO = {
                name: req.body.name,
                price: req.body.price,
                imageUrl: req.body.imageUrl,                
                ingredients: req.body.ingredients,
                token: req.headers.authorization as string
            }

            const response = await this.pizzaBusiness.insertPizza(input)
            res.status(201).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao inserir pizza" })
        }
    }

    
    public getPizzas = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const response = await this.pizzaBusiness.getPizzas(token)
            res.status(200).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar pizzas" })
        }
    }


    public deletePizza = async (req: Request, res: Response) => {
        try {
            const input: IDeletePizzaInputDTO = {
                token: req.headers.authorization as string,
                name: req.body.name
            }

            const response = await this.pizzaBusiness.deletePizza(input)
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao deletar pizza" })
        }
    }
}