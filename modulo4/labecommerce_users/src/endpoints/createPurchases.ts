import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProduct from "../data/selectProduct";
import selectUser from "../data/selectUser";
import { Purchase } from "../types/typesPurchase";

const createPurchases = async (req: Request, res: Response) => {
    try {
        const {user_id, product_id, quantity} = req.body

        if (!user_id || !product_id || !quantity) {
            res.status(412)
            throw new Error("Os parâmetros user_id, product_id, quantity são obrigatórios!")
        }

        const user = await selectUser(user_id)

        if(!user){
            res.status(404)
            throw new Error("Usuário não encontrado!")
        }
        
        const product = await selectProduct(product_id)
        
        if(!product){
            res.status(404)
            throw new Error("Produto não encontrado!")
        }
        const purchase: Purchase = {
            id: Date.now().toString(),
            user_id,
            product_id,
            quantity,
            totalPrice: product.price * quantity
        } 

        const newPurchase = await insertPurchase(purchase)

        res.status(201).send("Compra realizada com sucesso")
    
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}

export default createPurchases