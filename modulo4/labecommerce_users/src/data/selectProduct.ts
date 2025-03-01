import { Products } from "../types/typesProducts"
import { connection } from "./connection"

const selectProduct = async (productId: string): Promise<Products | undefined> => {
    const [result] = await connection("labecommerce_products")
    .select("*")
    .where("id", productId)    
    return result
}

export default selectProduct