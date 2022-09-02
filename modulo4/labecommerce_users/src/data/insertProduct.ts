import { connection } from "./connection";
import { Products } from "../types/typesProducts";

const insertProduct = async (product: Products): Promise<string> =>{

    const {id, name, price, image_url} = product

    const newProduct: string = await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        image_url
    })
    return newProduct
}
export default insertProduct