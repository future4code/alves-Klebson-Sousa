import { Router } from "express"
import { ShowBusiness } from "../business/ShowBusiness"
import { ShowController } from "../controller/ShowController"
import { ShowDatabase } from "../database/ShowDatabase"
import { TicketDatabase } from "../database/TicketDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const showRouter = Router()

const showController = new ShowController(
    new ShowBusiness(
        new ShowDatabase(),        
        new IdGenerator(),        
        new Authenticator(),
        new TicketDatabase()
    )
)

showRouter.post("/create", showController.createShow)
showRouter.get("/", showController.getShow)