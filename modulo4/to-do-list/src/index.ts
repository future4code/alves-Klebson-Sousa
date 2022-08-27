import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import createUsers from "./endpoints/createUser";
import getUserById from "./endpoints/getUser";
import updateUser from "./endpoints/updateUser";

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.post("/user/create", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (!req.body.name || !req.body.nickname || !req.body.email) {
      res.status(400);
      throw new Error("Preencha todos os campos");
    }

    await createUsers(name, nickname, email);

    res.status(201).send("Usuário criado com sucesso");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const result = await getUserById(id);
    if (!result.length) {
      res.status(404);
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send({ id: result[0].id, nickname: result[0].nickname });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const { name, nickname } = req.body;

    await updateUser(id, name, nickname);
    res.status(200).send("Usuário editado com sucesso!")

  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});
