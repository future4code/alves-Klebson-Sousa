import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../models/User";
import { Authenticator } from "../services/Authenticator";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      };

      const userBusiness = new UserBusiness();
      const response = await userBusiness.signup(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: any = {
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const response = await userBusiness.login(input);
      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const name = req.query.name as string

      const userBusiness = new UserBusiness();
      const response = await userBusiness.getUsers(token, name);
      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public deleteUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string
      const id = req.params.id

      const userBusiness = new UserBusiness();
      userBusiness.deleteUserById(id, token)
      res.status(200).send({ message: "usuário deletado com sucesso" })
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
