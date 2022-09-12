import { Request, Response } from "express";
import selectProductsBySarch from "../data/selectProductsBySarch";

const getProductsBySearch = async (req: Request, res: Response): Promise<any | undefined> => {
    try {
        let search: string = req.query.search as string

        if (!search) {
            search = ""
        }

        const products = await selectProductsBySarch(search)

        

        res.status(200).send(products);

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}
export default getProductsBySearch