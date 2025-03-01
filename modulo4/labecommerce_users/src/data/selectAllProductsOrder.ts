import { Products } from "../types/typesProducts"
import { connection } from "./connection"

const selectAllProductsOrder = async (order: string): Promise<Products[] | undefined> => {
    const result = await connection("labecommerce_products")
    .orderBy("name",order)  
    return result
}
export default selectAllProductsOrder