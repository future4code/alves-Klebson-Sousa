import { Request, Response } from "express";
import selectDisplayPages from "../data/selectDisplayPages";


export const getDisplayPages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let page = Number(req.query.page);
    if (page < 1 || isNaN(page)) {
      page = 1;
    }
    const size = 5
    const offset = size * (page - 1)

    const users = await selectDisplayPages(size, offset);

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
