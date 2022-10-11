import { IOrderDB, IOrderInputDTO, Order } from "../model/Order";
import { IProductDB, Product } from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    
    public static TABLE_PRODUCT = "Products_Stock"
    public static TABLE_ORDER_PRODUCT = "Order_Products"


    public toProductDBModel = (product: Product): IProductDB => {      
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice(),
            qty_stock: product.getQtyStock()
        }

        return productDB
    } 

    public selectProducts = async (): Promise<IProductDB[]> => {
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCT)
        .select()  

        return result
    }

    public findByProductName = async (productName: string): Promise<Product | undefined> => {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCT)
            .select()
            .where({ name:productName })           

        return result[0]
    }

    public selectPurchasesList = async (): Promise<IOrderDB[]> => {
        const result: IOrderDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_ORDER_PRODUCT)
            .select()                      

        return result
    }


}