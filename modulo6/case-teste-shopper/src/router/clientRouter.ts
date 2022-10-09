import { Router } from "express"
import { ClientBusiness } from "../business/ClientBusiness"
import { ClientController } from "../controller/ClientController"
import { ClientDatabase } from "../database/ClientDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const clientRouter = Router()

const clientController = new ClientController(
    new ClientBusiness(
        new ClientDatabase(),
        new IdGenerator()
    ),
    
)

clientRouter.get("/")
clientRouter.post("/signup", clientController.signup)