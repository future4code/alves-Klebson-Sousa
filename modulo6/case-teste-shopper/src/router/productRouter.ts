import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";

export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness()
)

productRouter.get("/")
productRouter.post("/purchase-list", productController.purchaseList)