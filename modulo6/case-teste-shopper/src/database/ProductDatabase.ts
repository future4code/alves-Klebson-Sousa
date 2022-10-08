import { IListPurchaseDTO, ListPurchase } from "../model/Order";
import { IProductsDB } from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {

    public static TABLE_PURCHASE = "List_Purchases"
    public static TABLE_PRODUCT = "Products_Stock"

    // public findByProductName = async (productName: string): Promise<IListPurchaseDTO | undefined> => {
    //     const result = await BaseDatabase
    //     .connection(ProductDatabase.TABLE_PRODUCT)
    //     .select()
    //     .where({name: productName})
    //     console.log(result[0])
    //     return result[0]
    // }

    // public toListPurchaseDBModel = (listPurchase: ListPurchase): IListPurchaseDB => {      
    //     const ListDB: IListPurchaseDB = {
    //         id: listPurchase.getId(),
    //         client_name: listPurchase.getClientName(),
    //         delivery_date: listPurchase.getDeliveryDate(),
    //         product_name: listPurchase.getProductName(),
    //         quantity: listPurchase.setQuantity()
    //     }

    //     return ListDB
    // }

    public findByProductName = async (productName: string) => {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCT)
            .select()
            .where({ name:productName })           

        return result[0]
    }
}