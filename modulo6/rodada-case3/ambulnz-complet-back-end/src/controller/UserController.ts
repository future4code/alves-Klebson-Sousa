import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { IAddressInputDTO } from "../models/Address";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const response = await this.userBusiness.signup(input)
            res.status(201).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar cadastro" })
        }
    }

    public address = async (req: Request, res: Response) => {
        try {
            const input: IAddressInputDTO = {
                token:req.headers.authorization as string,
                street: req.body.street,
                number: req.body.number,
                neighbourhood: req.body.neighbourhood,
                city: req.body.city,
                state: req.body.state,
                complement: req.body.complement
            }
            const response = await this.userBusiness.address(input)
            res.status(201).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar endereço" })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }
            const response = await this.userBusiness.login(input)
            res.status(201).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao fazer login" })
        }
    }
}