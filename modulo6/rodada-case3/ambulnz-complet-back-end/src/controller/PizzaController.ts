import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { BaseError } from "../errors/BaseError";
import { IInsertPizzaInputDTO } from "../models/Pizza";

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

    public insertIngredients = async (req: Request, res: Response) => {
        try {
            const input = {
                name: req.body.name,
                price: req.body.price,
                imageUrl: req.body.imageUrl,
                token: req.headers.authorization as string
            }

            // const response = await this.pizzaBusiness.insertPizza(input)
            // res.status(201).send(response)

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
            const response = await this.pizzaBusiness.getPizzas()
            res.status(200).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar pizzas" })
        }
    }

    public getPizzasV2 = async (req: Request, res: Response) => {
        try {
            const response = await this.pizzaBusiness.getPizzas()
            res.status(200).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar pizzas" })
        }
    }

    // public login = async (req: Request, res: Response) => {
    //     try {
    //         const input: ILoginInputDTO = {
    //             email: req.body.email,
    //             password: req.body.password
    //         }

    //         const response = await this.userBusiness.login(input)
    //         res.status(200).send(response)
    //     } catch (error) {
    //         console.log(error)
    //         if (error instanceof BaseError) {
    //             return res.status(error.statusCode).send({ message: error.message })
    //         }
    //         res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
    //     }
    // }
}