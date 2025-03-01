import { Router } from "express";
import { TicketBusiness } from "../business/TicketBusiness";
import { TicketController } from "../controller/TicketController";
import { ShowDatabase } from "../database/ShowDatabase";
import { TicketDatabase } from "../database/TicketDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const ticketRouter = Router()

const ticketController = new TicketController(
    new TicketBusiness(
        new TicketDatabase,
        new ShowDatabase,
        new UserDatabase,
        new IdGenerator,
        new Authenticator
    )
)

ticketRouter.post("/reservation", ticketController.reservationTicket)
ticketRouter.delete("/delete/:id", ticketController.deleteReservation)