import { Request, Response } from "express";
import selectPurchasesByUserId from "../data/selectPurchasesByUserId";
import selectUser from "../data/selectUser";

const getPurchasesByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const user = await selectUser(userId);

    if (!user) {
      res.status(404);
      throw new Error("Usuário não encontrado!");
    }

    const purchasesUser = await selectPurchasesByUserId(userId);

    if(!purchasesUser?.compras.length) {
        res.status(404)
    }
    throw new Error("Este usuário não fez nenhuma compra ainda!")

    res.status(200).send(purchasesUser);

  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};
export default getPurchasesByUserId;

// {
//     idPessoa
//     nomePessoa
//     compras: [
//     {
//     idCompra
//     nomeProduto
//     quantidade
//     totalCompra
//     }
//     {
//     idCompra
//     nomeProduto
//     quantidade
//     totalCompra
//     }
//     ]
//     }
