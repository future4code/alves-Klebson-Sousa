import { ClientDatabase } from "../database/ClientDatabase";
import { ConflictError } from "../errors/ConflictError";
import { MissingFields } from "../errors/MissingFields";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { Client, IMessageOutputDTO, ISignupInputDTO } from "../model/Client";
import { IOrderInputDTO, IPurchaseDTO, IPurchasesByUserDTO, Order } from "../model/Order";
import { compareDates } from "../services/formatDate";
import { IdGenerator } from "../services/IdGenerator";

export class ClientBusiness {
  constructor(
    private clientDatabase: ClientDatabase,
    private idGenerator: IdGenerator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const { name, deliveryDate } = input;

    if (!name || !deliveryDate) {
      throw new MissingFields();
    }

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string");
    }

    const deliveryAtDate = new Date(deliveryDate);

    if (!deliveryAtDate.getDate()) {
      throw new RequestError(
        "Parâmetro 'deliveryDate' inválido: deve ser aaaa/mm/dd"
      );
    }

    const deliveryDateAlreadyExists =
      await this.clientDatabase.findByNameByDate(name, deliveryDate);

    if (deliveryDateAlreadyExists) {
      const date = compareDates(deliveryDateAlreadyExists.delivery_date);
      if (date === deliveryDate) {
        throw new ConflictError("Já existe um pedido para essa data.");
      }
    }

    const id = this.idGenerator.generate();

    const client = new Client(id, name, deliveryAtDate);

    await this.clientDatabase.insertClient(client);

    const response: IMessageOutputDTO = {
      message: "Dados inseridos com sucesso",
    };

    return response;
  };

  public createListPurchases = (input: IOrderInputDTO, idOrder: string) => {
    const orderInput = input.products
    if (orderInput.length === 0) {
      throw new ParamsError("Pedido vazio! Informe nome e quantidade desejada.")
  }
    if (!idOrder) {
      throw new ParamsError("Id do pedido deve ser passado")
  }

  

  
  }

  public getListPurchases = async (clientId: string): Promise<IPurchasesByUserDTO | undefined> => {
    const registeredPurchases = await this.clientDatabase.getListPurchases(
      clientId
    );

    if (!registeredPurchases) {
      throw new NotFoundError("Não há cadastro para esta data.");
    }

    let purchase: any = {};
    const listPurchases = registeredPurchases.map((item: any) => {
      purchase = {
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
      };
      return purchase;
    });

    const order = registeredPurchases.find((item: any) => {
      return {
        orderId: item.idClient
      };
    });
    const OrderClient: IPurchasesByUserDTO = {
      orderId: order.idClient,
      clientName: order.clientName,
      deliveryDate: order.delivery_date,
      listPurchase: listPurchases,
    };

    return OrderClient
  };
}
