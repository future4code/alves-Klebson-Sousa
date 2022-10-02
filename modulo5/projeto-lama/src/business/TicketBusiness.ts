import { ShowDatabase } from "../database/ShowDatabase";
import { TicketDatabase } from "../database/TicketDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import {ParamsError} from "../errors/ParamsError"
import { ICreateMessageOutputDTO, ICreateTicketInputDTO, ICreateTicketOutputDTO, IDeleteTicketInputDTO, ITicketDB } from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class TicketBusiness {
  constructor(
    private ticketDatabase: TicketDatabase,
    private showDatabase: ShowDatabase,
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public reservationTicket = async (input: ICreateTicketInputDTO) => {
    const { token, showId } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!showId) {
        throw new ParamsError("Parâmetro showId  deve ser passado")
    }

    if (!payload) {
      throw new AuthenticationError("Insira um token válido");
    }

    const isShowAlreadyExists = await this.showDatabase.findShowById(showId)

    if (!isShowAlreadyExists) {
        throw new NotFoundError("Show não encontrado, verifique se o id está correto")
    }

    const isAlreadyTicket = await this.ticketDatabase.findTicket(showId, payload.id)

    if (isAlreadyTicket) {
        throw new ConflictError("Permitido somente uma reseva por usuário")
    }

   
    const id = this.idGenerator.generate()

    const ticket: ITicketDB = {
        id,
        show_id: showId,
        user_id: payload.id
    }    

    await this.ticketDatabase.insertBookTicket(ticket)

    const response: ICreateMessageOutputDTO = {
        message: "Reserva feita com sucesso",
      };
  
      return response;

  };

  public deleteReservation = async (input:IDeleteTicketInputDTO) => {
    const { token, showId} = input

    const payload = this.authenticator.getTokenPayload(token)

    if (!payload) {
        throw new AuthenticationError("Insira um token válido")
    }

    const isShowAlreadyExists = await this.showDatabase.findShowById(showId)

    if (!isShowAlreadyExists) {
        throw new NotFoundError("Show não encontrado, verifique se o id está correto")
    }

    const isAlreadyTicket = await this.ticketDatabase.findTicket(showId, payload.id)

    if (!isAlreadyTicket) {
        throw new ConflictError("Ainda não criou uma reserva")
    }

    if (payload.role === USER_ROLES.NORMAL && isShowAlreadyExists.id !==isAlreadyTicket.show_id){
        throw new AuthorizationError()
    }
    await this.ticketDatabase.deleteReservationTicket(showId, payload.id)

    const response: ICreateMessageOutputDTO = {
        message: "Reserva deletada com sucesso",
      };
  
      return response;
  }

}
