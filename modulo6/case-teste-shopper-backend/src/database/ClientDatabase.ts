import { Client, IClientDB } from "../model/Client";
import { IGetPurchasesByUserDTO, IProductsClientDB } from "../model/Order";
import { IProductDB } from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";

export class ClientDatabase extends BaseDatabase {
    public static TABLE_CLIENTS = "Order_Clients" 
    public static TABLE_ORDER_PRODUCT = "Products_Clients"   

    public toClientDBModel  = (client:Client): IClientDB => {
        const clientDB: IClientDB = { 
            id: client.getId(),           
            name: client.getName(),
            delivery_date: client.getDeliveryDate()
        }
        return clientDB
    }

    public findByNameByDate = async (name: string, delivery_date: Date): Promise<IClientDB | undefined> => {
        const result: IClientDB[] = await BaseDatabase
        .connection(ClientDatabase.TABLE_CLIENTS)
        .select()
        .where({ name })
        .andWhere({ delivery_date })

        return result[0]
    } 

    public findByName = async (name: string): Promise<IClientDB | undefined> => {
        const result: IClientDB[] = await BaseDatabase
        .connection(ClientDatabase.TABLE_CLIENTS)
        .select()
        .where({ name })        

        return result[0]
    }

    public getPriceQuantity = async (name: string): Promise<{price: number, qty_stock: number} | undefined> => {
        const result: any[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCT)
        .select("price", "qty_stock")
        .where({ name })                   

        return result[0] 
    }

    public findClientById = async (id: string): Promise<IClientDB | undefined> => {
        const result: IClientDB[] = await BaseDatabase
        .connection(ClientDatabase.TABLE_CLIENTS)
        .select()
        .where({ id })        

        return result[0]
    }

    public getListPurchases = async (id: string): Promise<any> => {
        const result = await BaseDatabase
        .connection.raw(`
        SELECT Order_Clients.id as idClient, Order_Clients.name as clientName, Order_Clients.delivery_date, 
        Products_Clients.id as idProduct, Products_Clients.product_name as productName, Products_Stock.price, Products_Clients.quantity
        FROM Order_Clients
        JOIN Products_Clients ON Products_Clients.order_id = Order_Clients.id
        JOIN Products_Stock ON Products_Clients.product_name = Products_Stock.name
        WHERE Order_Clients.id= "${id}" `)
     
        return result[0]
    }
   

    public insertClient = async (client: Client): Promise<void> => {
        const clientDB = this.toClientDBModel(client)
        await BaseDatabase
            .connection(ClientDatabase.TABLE_CLIENTS)
            .insert(clientDB)
    }

    public insertProductOnOrder = async (orderProduct: IProductsClientDB): Promise<void> => {
        const productDb = await BaseDatabase
            .connection(ClientDatabase.TABLE_ORDER_PRODUCT)
            .insert(orderProduct)
    }
}