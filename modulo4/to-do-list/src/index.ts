import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import selectInfoUser from "./data/selectInfoUser";
import createUsers from "./endpoints/createUser";
import getUserById from "./endpoints/getUser";
import updateUser from "./endpoints/updateUser";
import moment from "moment";
import { ids } from "./data/ids";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";
import getUsers from "./endpoints/getUsers";
import { Console } from "console";
import getTaskCreateUser from "./endpoints/getTasksCreateUser";

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.post("/user/create", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
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
    const id: string = req.params.id;
    const { name, nickname, email } = req.body;
    const idUser = await selectInfoUser(id);

    if (!idUser) {
      res.status(404);
      throw new Error("Digite um id válido");
    }

    if (name === "" || nickname === "" || email === "") {
      res.status(400);
      throw new Error("Preencha todos os campos");
    }
    if (!name && !nickname && !email) {
      res.status(400);
      throw new Error("Ecolha ao menos um valor a ser auterado");
    }

    await updateUser(id, name, nickname, email);
    res.status(200).send("Usuário editado com sucesso!");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.post("/task/create", async (req: Request, res: Response) => {
  try {
    const { title, description, deadline, authorTaskId } = req.body;

    if (!title || !description || !deadline || !authorTaskId) {
      res.status(400);
      throw new Error("Preencha todos os campos");
    }
    const dateDiff: number =
      moment(req.body.deadline, "DD/MM/YYYY").unix() - moment().unix();

    if (dateDiff <= 0) {
      res.status(400);
      throw new Error("Insira uma data que ainda não venceu.");
    }

    await createTask(
      ids,
      title,
      description,
      moment(deadline, "DD/MM/YYYY").format("YYYY-MM-DD"),
      authorTaskId
    );

    res.status(201).send("Tarefa criada com sucesso");
    ids;
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const result = await getTaskById(req.params.id);

    if (!result) {
      res.status(404);
      throw new Error("Tarefa não encontrada!");
    }

    res.status(200).send({
      id: result.task_id,
      title: result.title,
      description: result.description,
      deadline: moment(result.deadline, "YYYY-MM-DD").format("DD/MM/YYYY"),
      status: result.status,
      authorTaskId: result.author_task_id,
      nickname: result.nickname,
    });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

app.get("/users/all", async (req: Request, res: Response) => {
  try {
    const result = await getUsers();
    if (!result.length) {
      res.status(404);
      throw new Error("Lista de suários não encontrado");
    }
    console.log(result);
    res.status(200).send({ users: result });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});

// app.get("/task?creatorUserId", async (req: Request, res: Response) => {
//   try {
//     const authorTaskId: string = req.query.author_task_id as string

//     if (!authorTaskId) {
//       res.status(404);
//       throw new Error("Insira um id válido");
//     }

//     const result = await getTaskCreateUser(authorTaskId)
//     console.log(result)

//     res.status(200).send(result);
//   } catch (error: any) {
//     if (res.statusCode == 200) {
//       res.status(500).send(error.sqlMessage || error.message);
//     } else {
//       res.status(res.statusCode).send(error.message);
//     }
//   }
// });

app.get("/task?creatorUserId", async (req: Request, res: Response) => {
  try {
    const authorTaskId: string = req.query.author_task_id as string

    if (!authorTaskId) {
      res.status(404)
      throw new Error("Insira um id válido")
    }

    const result = await getTaskCreateUser(authorTaskId)

    res.status(200).send(result)

  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.sqlMessage || error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
});
