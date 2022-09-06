import { Request, Response } from "express";
import selectAllUsersOrder from "../data/selectAllUsersOrder";

// 2. Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que
// possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o
// usuário não passe nenhum parâmetro, a ordenação deve ser por email.

export const getAllUsersOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let sort = req.query.sort;
    let order = req.query.order as string

    if (!(sort === "name" || sort === "type")) {
        sort = "email"
    }
    
    if (order.toUpperCase() !== "DESC"){
        order = "ASC"
    }
   
    const users = await selectAllUsersOrder(sort, order);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
