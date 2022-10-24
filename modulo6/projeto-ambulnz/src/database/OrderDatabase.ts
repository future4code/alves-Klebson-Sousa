import { IOrdersDB, Order } from "../models/Order"
import { IPizzaDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "Amb_Orders"
    public static TABLE_ORDER_ITEMS= "Amb_Order_Items"

    // public toOrderDBModel = (order: Order): IOrdersDB => {
    //     return {
    //         name: pizza.getName(),
    //         price: pizza.getprice()
    //     }
    // }

    // public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    //     const result: IUserDB[] = await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .select()
    //         .where({ email })

    //     return result[0]
    // }

    // public createUser = async (user: User): Promise<void> => {
    //     const userDB = this.toUserDBModel(user)

    //     await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .insert(userDB)
    // }
}