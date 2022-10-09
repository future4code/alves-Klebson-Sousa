import { Client, IClientDB } from "../model/Client";
import { BaseDatabase } from "./BaseDatabase";

export class ClientDatabase extends BaseDatabase {
    public static TABLE_CLIENTS = "Purchases_Clients"

    public toClientDBModel  = (client:Client): IClientDB => {
        const clientDB: IClientDB = {
            id: client.getId(),
            name: client.getName(),
            delivery_date: client.getDeliveryDate()
        }
        return clientDB
    }

    public findByName = async (name: string, delivery_date: string): Promise<IClientDB | undefined> => {
        const result: IClientDB[] = await BaseDatabase
        .connection(ClientDatabase.TABLE_CLIENTS)
        .select()
        .where({ name })
        .andWhere({ delivery_date })

        return result[0]
    }

    public insertClient = async (client: Client): Promise<void> => {
        const clientDB = this.toClientDBModel(client)
        await BaseDatabase
            .connection(ClientDatabase.TABLE_CLIENTS)
            .insert(clientDB)
    }
}