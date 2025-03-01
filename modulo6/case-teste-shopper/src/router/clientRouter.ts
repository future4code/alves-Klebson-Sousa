import { Router } from "express"
import { ClientBusiness } from "../business/ClientBusiness"
import { ProductBusiness } from "../business/ProductBusiness"
import { ClientController } from "../controller/ClientController"
import { ClientDatabase } from "../database/ClientDatabase"
import { ProductDatabase } from "../database/ProductDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const clientRouter = Router()

const clientController = new ClientController(
    new ClientBusiness(
        new ClientDatabase(),
        new IdGenerator()
    )    
)

clientRouter.get("/")
clientRouter.post("/signup", clientController.signup)
clientRouter.get("/order-purchase/:id", clientController.getListPurchases)
