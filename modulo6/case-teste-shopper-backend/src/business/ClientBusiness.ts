import { ClientDatabase } from "../database/ClientDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { ConflictError } from "../errors/ConflictError";
import { MissingFields } from "../errors/MissingFields";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { Client, IMessageOutputDTO, ISignupInputDTO } from "../model/Client";
import { ICreateOrderOutputDTO, IOrderInputDTO, IProductsClientDB, IPurchasesByUserDTO } from "../model/Order";
import { Product } from "../model/Products";
import { compareDates } from "../services/formatDate";
import { IdGenerator } from "../services/IdGenerator";

export class ClientBusiness {
  constructor(
    private clientDatabase: ClientDatabase,
    private productDatabase: ProductDatabase,
    private idGenerator: IdGenerator
  ) {}

  public registerOrder = async (input: ISignupInputDTO) => {
    const { name, deliveryDate } = input;

    if (!name || !deliveryDate) {
      throw new MissingFields();
    }

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string");
    }

    console.log("deliveryDate", deliveryDate)

    const deliveryAtDate = new Date(deliveryDate);

    console.log("deliveryAtDate", deliveryAtDate)


    if (!deliveryAtDate.getDate()) {
      throw new RequestError(
        "Parâmetro 'data' inválido: deve ser aaaa/mm/dd"
      );
    }
    const deliveryDateAlreadyExists =
    await this.clientDatabase.findByNameByDate(name, deliveryAtDate);
    
    if (deliveryDateAlreadyExists) {
      const date = compareDates(deliveryDateAlreadyExists.delivery_date);
      console.log("date", date)
      if (date === deliveryDate) {
        throw new ConflictError("Já existe um pedido para essa data.");
        
      }
    }
    

    const id = this.idGenerator.generate();

    const client = new Client(id, name, deliveryAtDate);

    await this.clientDatabase.insertClient(client);

    const response: IMessageOutputDTO = {
      message: "Dados inseridos com sucesso",
      id,
      name
    };

    return response;
  };

  public createListPurchases = async (input: IOrderInputDTO, idClient: string) => {
    const listPurchase = input.listPurchase

    const idOrder = await this.clientDatabase.findClientById(idClient)

    if (!idOrder) {
      throw new NotFoundError("Pedido inexistente")
    }
    

    if (listPurchase.length === 0) {
      throw new ParamsError(
        "Pedido vazio! Informe nome e quantidade desejada."
      );
    }

    const products = listPurchase.map((product) => {
      if (product.quantity <= 0) {
        throw new ParamsError("Quantidade de product inválida! A quantidade mínima é 1")
    }
      return {
        ...product,
        id: this.idGenerator.generate(),
        price: 0,
        subTotal: 0
      }
    })

    for (let product of products) {
      const values = await this.clientDatabase.getPriceQuantity(product.productName)
      
      if (values && values.qty_stock === 0) {
        throw new NotFoundError("Produto esgotado")
      }
      const price = values?.price as number
      const sub = product.quantity * price
    
      product.price = price 
      product.subTotal = +sub.toFixed(2)
    }
    
    for (let product of products) {
      const orderProduct: IProductsClientDB = {
        id: product.id,
        product_name: product.productName,
        quantity: product.quantity,
        order_id: idClient
      }
      const stock = await this.productDatabase.findByProductName(product.productName)
      
      const qtyStock = stock?.qty_stock
      
      if (qtyStock && qtyStock < product.quantity) {
        throw new ConflictError("Quantidade do pedido acima da quantidade em estoque")
      }

      await this.clientDatabase.insertProductOnOrder(orderProduct)
      
      if (stock) {
        const newqtyStock = stock.qty_stock - product.quantity
        
        await this.productDatabase.updateProductStock(newqtyStock, stock.id)
      }
    }

    const total = products.reduce((acc, product) => (acc + product.subTotal), 0)

    const response: ICreateOrderOutputDTO = {
      message: "Lista criada com sucesso",
      order: {
        id:idClient,
        products,
        total: +total.toFixed(2)
      }
    }    

    return response
  };

  public getListPurchases = async (
    clientId: string
  ): Promise<IPurchasesByUserDTO | undefined> => {
    const registeredPurchases = await this.clientDatabase.getListPurchases(
      clientId
    );

    if (!registeredPurchases) {
      throw new NotFoundError("Não há cadastro para esta data.");
    }

    let purchase: any = {};
    const listPurchases = registeredPurchases.map((item: any) => {
      const subTotal = item.price * item.quantity
      
      purchase = {
        idProduct: item.idProduct,
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
        subTotal: +subTotal.toFixed(2)
      };
      return purchase;
    });

    const order = registeredPurchases.find((item: any) => item.idClient);
    const total = listPurchases.reduce(
      (acc: number, product:typeof listPurchases) => (acc + product.subTotal), 0)

    const OrderClient: IPurchasesByUserDTO = {
      orderId: order.idClient,
      clientName: order.clientName,
      deliveryDate: order.delivery_date,
      listPurchase: listPurchases,
      total: total.toFixed(2)
    }

    return OrderClient;
  }
  public deleteProduct = async (productId: string, orderId: string) => {    

   const IdOrder = await this.clientDatabase.findClientById(orderId)

   if (!IdOrder) {
    throw new NotFoundError("Lista de compras não encontrada")

   }

   const product = await this.clientDatabase.findProductById(productId)

   if(!product) {
    throw new NotFoundError("Produto não não existe na sua lista")
   }

   await this.clientDatabase.deleteProductById(product.id, IdOrder.id)

   const stock = await this.productDatabase.findByProductName(product.product_name)      
     
      
      if (stock) {
        const newqtyStock = stock.qty_stock + product.quantity       
        
        await this.productDatabase.updateProductStock(newqtyStock, stock.id)
      }

      
   return {message: "Produto deletado"}
    
  };
}
