import { Request, Response } from "express";
import { PersonBusiness } from "../business/PersonBusiness";
import { BaseError } from "../errors/BaseError";
import { IPersonInputDTO } from "../models/Person";
import { IdGenerator } from "../services/IdGenerator";

export class PersonController {
  constructor(private personBusiness: PersonBusiness) {}
  public getPerson = async (req: Request, res: Response) => {
    try {
      const response = await this.personBusiness.getPerson();
      res.status(200).send(response);
      
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado ao buscar shows" });
    }
  };

  public insertData = async (req: Request, res: Response) => {
    try {
      const input: IPersonInputDTO = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        participation: req.body.participation,
      };

      const response = await this.personBusiness.insertData(input)
      res.status(201).send(response)

    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao criar show" });
    }
  };
}
