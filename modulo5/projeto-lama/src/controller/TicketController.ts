import { Request, Response } from "express";
import { TicketBusiness } from "../business/TicketBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateTicketInputDTO, IDeleteTicketInputDTO } from "../models/Show";

export class TicketController {
  constructor(private ticketBusiness: TicketBusiness) {}

  public reservationTicket = async (req: Request, res: Response) => {
    try {
      const input: ICreateTicketInputDTO = {
        token: req.headers.authorization as string,
        showId: req.body.showId
      };
      
      const response = await this.ticketBusiness.reservationTicket(input);
      res.status(201).send(response);

    } catch (error) {
        console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao reservar ticket" });
    }
  };

  public DeleteReservation = async (req: Request, res: Response) => {
    try {
      const input: IDeleteTicketInputDTO = {
        token: req.headers.authorization as string,       
        showId: req.params.id      
      };

      const response = await this.ticketBusiness.DeleteReservation(input);
      res.status(201).send(response);

    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao tentar deletar reserva" });
    }
  };
}
