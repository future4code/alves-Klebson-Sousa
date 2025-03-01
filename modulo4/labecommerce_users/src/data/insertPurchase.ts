import { Purchase } from "../types/typesPurchase"
import { connection } from "./connection"

const insertPurchase = async (purchase: Purchase): Promise<string> => {
const {id, user_id, product_id, quantity, totalPrice} = purchase

    const result: string = await connection("labecommerce_purchases")
    .insert({
        id,
        user_id,
        product_id,
        quantity,
        total_price: totalPrice 
    })
    return result
}
export default insertPurchase