import { Request, Response } from "express";
import { GenerateId } from "../services/GenerateId";

export const signup = async (req: Request, res: Response) => {
  try {
    const {name, email, password, role} = req.body

    if (!name || !email || !password || !role) {
        res.statusCode = 422
        throw new Error("Os campos name, email, password, role devem ser preenchidos!")
    }

    const generateId = new GenerateId()

  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res
        .status(res.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  }
};
