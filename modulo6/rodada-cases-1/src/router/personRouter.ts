import { Router } from "express";
import { PersonBusiness } from "../business/PersonBusiness";
import { PersonController } from "../controller/PersonController";
import { PersonDatabase } from "../database/PersonDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const personRouter = Router()

const personController = new PersonController(
    new PersonBusiness(
        new PersonDatabase,
        new IdGenerator
    )
)

personRouter.get('/', personController.getPerson)
personRouter.post('/insert', personController.insertData)