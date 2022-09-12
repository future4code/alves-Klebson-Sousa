import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { CreateProducts, Products } from "../types/typesProducts";


const createProducts = async (req: Request, res: Response) => {
  try {
    const { name, price, image_url }: CreateProducts = req.body;

    if (!name || !price || !image_url) {
      res.status(422);
      throw new Error(
        "Os parâmetros name, price e image_url devem ser preenchidos'"
      )
    }
    const product: Products = {
        id: Date.now().toString(),
        name,
        price,
        image_url
    }

    const newProduct = await insertProduct(product)
    res.status(201).send(`Produto ${name}, criado com sucesso!`)
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export default createProducts;
