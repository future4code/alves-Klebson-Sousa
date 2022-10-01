import { ShowDatabase } from "../database/ShowDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import {
  ICreateMessageOutputDTO,
  ICreateShowInputDTO,
  IGetShowsOutputDTO,
  Show,
} from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import moment from "moment"
import { TicketDatabase } from "../database/TicketDatabase";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,    
    private authenticator: Authenticator,
    private ticketDatabase: TicketDatabase
  ) {}

  public createShow = async (
    input: ICreateShowInputDTO
  ): Promise<ICreateMessageOutputDTO> => {
    const { token, band, startsAt } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError("Não autenticado");
    }

    if (typeof band !== "string") {
      throw new ParamsError("Parâmetro 'band' inválido: deve ser uma string");
    }

    const showDate = "05/12/2022"

    const previousDate: number = moment(showDate, 'DD/MM/YYYY').unix() - moment(startsAt, 'YYYY-MM-DD').unix()

    const isShowAlreadyExists = await this.showDatabase.findShowByStartsAt(
      startsAt
    );
   

    if (isShowAlreadyExists) {
      throw new ConflictError("Já existe Show previsto para esta data");
    }
    if (previousDate > 0) {
      throw new ConflictError("Não é possível criar show antes da data prevista");
    }

    if (payload.role === USER_ROLES.NORMAL) {
      throw new AuthorizationError("Somente admin pde criar shows");
    }

    const id = this.idGenerator.generate();

    const show = new Show(id, band, startsAt);    

    await this.showDatabase.insertShow(show);

    const response: ICreateMessageOutputDTO = {
      message: "Show criado com sucesso",
    };

    return response;
  };

  public getShow = async (): Promise<IGetShowsOutputDTO> => {
    
    const showsDB = await this.showDatabase.selectShows()

    const shows = showsDB.map(showDB => {
        return new Show(
          showDB.id,
          showDB.band,
          showDB.starts_at
        )
    })

    for (let show of shows) {
        const showtId = show.getId()
        const tickets = await this.ticketDatabase.selectTickets(showtId)
        show.setTickets(show.getTickets() - tickets)
    }

    const response: IGetShowsOutputDTO = {
      shows
    }

    return response
  }
}
