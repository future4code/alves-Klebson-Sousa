import { ShowDatabase } from "../database/ShowDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import {
  ICreateShowInputDTO,
  ICreateShowpOutputDTO,
  Show,
} from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import moment from "moment"

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public createShow = async (
    input: ICreateShowInputDTO
  ): Promise<ICreateShowpOutputDTO> => {
    const { token, band, startsAt } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError("Não autenticado");
    }

    if (typeof band !== "string") {
      throw new ParamsError("Parâmetro 'band' inválido: deve ser uma string");
    }

    const showDate = "05/12/2022"
    // const date1 = Number(showDate.date)
    const date2: number = moment(showDate, 'DD/MM/YYYY').unix() - moment(startsAt, 'YYYY-MM-DD').unix()

    const isShowAlreadyExists = await this.showDatabase.findByStartsAt(
      startsAt
    );

    console.log("isShow", date2)    

    if (isShowAlreadyExists) {
      throw new ConflictError("Já existe Show previsto para esta data");
    }
    if (date2 > 0) {
      throw new ConflictError("Não é possível criar show antes da data prevista");
    }

    if (payload.role === USER_ROLES.NORMAL) {
      throw new AuthorizationError("Somente admin pde criar shows");
    }

    const id = this.idGenerator.generate();

    const show = new Show(id, band, startsAt);    

    await this.showDatabase.insertShow(show);

    const response: ICreateShowpOutputDTO = {
      message: "Show criado com sucesso",
    };

    return response;
  };
}
