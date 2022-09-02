import { Products } from "../types/typesProducts"
import { connection } from "./connection"

const selectAllProducts = async (): Promise<Products[]> => {
    const result: Products[] = await connection("labecommerce_products")
    .select()   

    return result
}
export default selectAllProducts