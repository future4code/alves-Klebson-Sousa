import { Client, IClientDB } from "../model/Client";
import { IGetPurchasesByUserDTO } from "../model/Order";
import { BaseDatabase } from "./BaseDatabase";

export class ClientDatabase extends BaseDatabase {
    public static TABLE_CLIENTS = "Purchases_Clients" 
    public static TABLE_ORDER_PRODUCT = "Order_Products"   

    public toClientDBModel  = (client:Client): IClientDB => {
        const clientDB: IClientDB = { 
            id: client.getId(),           
            name: client.getName(),
            delivery_date: client.getDeliveryDate()
        }
        return clientDB
    }

    public findByNameByDate = async (name: string, delivery_date: string): Promise<IClientDB | undefined> => {
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
        SELECT Purchases_Clients.id as idClient, Purchases_Clients.name as clientName, Purchases_Clients.delivery_date, 
        Products_Stock.name as productName, Products_Stock.price, Order_Products.quantity
        FROM Purchases_Clients
        JOIN Order_Products ON Order_Products.client_id = Purchases_Clients.id
        JOIN Products_Stock ON Order_Products.product_name = Products_Stock.name
        WHERE Purchases_Clients.id= "${id}" `)
     
        return result[0]
    }
   

    public insertClient = async (client: Client): Promise<void> => {
        const clientDB = this.toClientDBModel(client)
        await BaseDatabase
            .connection(ClientDatabase.TABLE_CLIENTS)
            .insert(clientDB)
    }
}