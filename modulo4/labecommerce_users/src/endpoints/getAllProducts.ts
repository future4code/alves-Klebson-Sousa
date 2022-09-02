import { Request, Response } from "express"
import selectAllProducts from "../data/selectAllProducts"

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const product = await selectAllProducts()

        if (!product) {
            res.status(404)
            throw new Error("Produto não encontrado!")
        }

        res.status(200).send(product)

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}
export default getAllProducts