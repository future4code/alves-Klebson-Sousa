import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { IListPurchaseDTO } from "../model/Order";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}
    public purchaseList = async (req: Request, res: Response) => {
        try {
            const input: IListPurchaseDTO = {
                clientName: req.body.clientName,
                deliveryDate: req.body.deliveryDate,
                productName: req.body.productName,    
                quantity: req.body.quantity
            }

            const response = await this.productBusiness.purchaseList(input)
            
            res.status(201).send(response)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}