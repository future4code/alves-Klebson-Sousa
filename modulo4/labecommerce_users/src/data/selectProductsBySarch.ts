import { connection } from "./connection"

const selectProductsBySarch =async (search: string): Promise<any> => {
    const result = await connection("labecommerce_products")
        .where("name", "LIKE", `%${search}%` )
        return result
}
export default selectProductsBySarch