import { Request, Response } from "express";
import selecFilterOrderPages from "../data/selectFilterOrderPages";

export const getFilterOrderPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let filter = req.query.filter || ""    
    let sort = req.query.sort as string;
    let order = req.query.order as string;
    let page = Number(req.query.page);

    if (page < 1 || isNaN(page)) {
      page = 1;
    }
    const size = 5;
    const offset = size * (page - 1);

    if (!(sort === "name" || sort === "type")) {
      sort = "name";
    }

    if (!order || order.toUpperCase() !== "ASC") {
      order = "DESC";
    }
    const result = await selecFilterOrderPages(
      filter as string,      
      sort,
      order,
      size,
      offset
    );

    const users = result.map((user:any) => {
        return user
    })
    
    if (!users.length) {
        res.statusCode = 404;
        throw new Error("No users found");
    }
    res.status(200).send(users)    
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
