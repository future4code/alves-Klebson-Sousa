import { IdGenerator } from "../services/IdGenerator";
import { IGetPizzasOutputDTO, IPizzaDB, Pizza } from "../models/Pizza";
import { OrderDatabase } from "../database/OrderDatabase";
import {
  ICreateOrderInputDTO,
  ICreateOrderOutputDTO,
  IGetOrdersOutputDTO,
  IOrderItemDB,
  Order,
} from "../models/Order";
import { ParamsError } from "../errors/ParamsError";
import { NotFoundError } from "../errors/NotFoundError";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class OrderBusiness {
  constructor(
    private orderDatabase: OrderDatabase,
    private userDatabase: UserDatabase,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public createOrder = async (input: ICreateOrderInputDTO):Promise<ICreateOrderOutputDTO> => {
    const pizzasInput = input.pizzas;
    const token = input.token
   
    const payload = this.authenticator.getTokenPayload(token)

    if (!payload) {
      throw new ParamsError("Token inválido")
    }

    const userDB = await this.userDatabase.findUserById(payload.id);
    

    if (pizzasInput.length === 0) {
      throw new ParamsError("Pedido vazio! Informe ao menos uma pizza.");
    }

    const pizzas = pizzasInput.map((pizza) => {
      if (pizza.quantity <= 0) {
        throw new ParamsError(
          "Quantidade de pizza inválida! A quantidade mínima é 1."
        );
      }
      return {
        ...pizza,
        price: 0,
      };
    });

    for (let pizza of pizzas) {
      const price = await this.orderDatabase.getPrice(pizza.name);

      if (!price) {
        throw new NotFoundError("Pizza não existe");
      }
      pizza.price = price;
    }

    const ordersDBExist = await this.orderDatabase.getOrdersById(userDB.id)     

    if (!ordersDBExist) {
      await this.orderDatabase.createOrder(userDB.id)
    }

    const ordersDB = await this.orderDatabase.getOrdersById(userDB.id)
    const orderId = ordersDB.id  

    for (let pizza of pizzas) {
      const orderItem: IOrderItemDB = {
        id: this.idGenerator.generate(),
        pizza_name: pizza.name,
        quantity: pizza.quantity,
        order_id: userDB.id,
      };
      await this.orderDatabase.insertItemOnOrder(orderItem);
    }

    const total = pizzas.reduce(
            (acc, pizza) => acc + (pizza.price * pizza.quantity), 0) 

    const response: ICreateOrderOutputDTO = {
      message: `Obrigado pela preferência ${userDB.name}, logo seu pedido estará pronto!`,
      order: {
        id: orderId,
        userName: userDB.name,
        pizzas,
        total: +total.toFixed(2)
      }
    }

    return response
  }

  public getOrders = async (): Promise<IGetOrdersOutputDTO> => {

    const ordersDB = await this.orderDatabase.getOrders()

    
    const orders: Order[] = []
    
    for (let orderDB of ordersDB) {
          const userDB = await this.userDatabase.findUserById(orderDB.id);
            const order = new Order(
                    orderDB.id,
                    userDB.name,
                    []
                )
            const orderItemsDB: any = await 
            this.orderDatabase.getOrderItem(order.getId())

            for (let orderItemDB of orderItemsDB) {
              const price = await this.orderDatabase.getPrice(orderItemDB.pizza_name)

              orderItemDB.price = price
            }
               
            order.setOrderItems(orderItemsDB)

            orders.push(order)
        }

        const response: IGetOrdersOutputDTO = {
            orders: orders.map((order) => ({
                id: order.getId(),
                userName: order.getUser(),
                pizzas: order.getOrderItems().map((item) => ({
                  name: item.pizza_name,
                  quantity: item.quantity,
                  price: item.price,
                })),
                total: order.getTotal()
            }))
        }

        return response
  }
}
