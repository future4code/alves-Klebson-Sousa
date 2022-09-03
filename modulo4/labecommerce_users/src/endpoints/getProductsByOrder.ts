import { Request, Response } from "express";
import selectAllProductsOrder from "../data/selectAllProductsOrder";

const getProductsByOrder = async (req: Request, res: Response) => {
  try {
    let order: string = req.query.order as string;
    
    order = order.toLowerCase() === "desc" ? "desc" : "asc";

    const products = await selectAllProductsOrder(order);

    res.status(200).send(products);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};
export default getProductsByOrder;
