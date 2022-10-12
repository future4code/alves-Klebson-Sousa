import { IProductsClientDB, IOrderInputDTO } from "../model/Order";
import { IProductDB, Product } from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    
    public static TABLE_PRODUCT = "Products_Stock"
    public static TABLE_ORDER_PRODUCT = "Products_Clients"


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

    public updateProductStock = async (qtyStock: number, name: string): Promise<void> => {
        await BaseDatabase
        .connection.raw(`UPDATE Products_Stock
        SET qty_stock = ${qtyStock}
        WHERE "${name}";`)       
    }

    public findByProductName = async (productName: string): Promise<Product | undefined> => {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCT)
            .select()
            .where({ name:productName })           

        return result[0]
    }

    public findQuantityProductByName = async (productName: string): Promise<number | undefined> => {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCT)
            .select("qty_stock")
            .where({ name:productName })           

        return result[0].qty_stock as number
    }

    public selectPurchasesList = async (): Promise<IProductsClientDB[]> => {
        const result: IProductsClientDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_ORDER_PRODUCT)
            .select()                      

        return result
    }


}