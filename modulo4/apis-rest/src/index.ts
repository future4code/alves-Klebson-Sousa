import express, { query, Request, Response } from "express";
import cors from "cors";
import { users, User, UserType } from "./data";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.use(cors());

// 1.Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.
// a. Qual método HTTP você deve utilizar para isso?
// Seria o método get
// b. Como você indicaria a **entidade** que está sendo manipulada?
// Seria o path /users

// 2. Agora, vamos refatorar o exercício 1 e implementar uma funcionalidade que busque
// todos os usuários que tenham uma propriedade `type` específica, recebendo apenas um
// `type` por vez. Após isso, responda:

// a. Como você passou os parâmetros de type para a requisição? Por quê?
// Passei como query, porque consigo selecionar os usuários por admin ou normal
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam
// utilizados?

// 3. Vamos agora praticar o uso de buscas mais variáveis. Refatore novamente o exercício 1 e implemente a funcionalidade de search, para encontrar um usuário buscando ****por **nome**.

// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// Seria o query
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário
// tenha sido encontrado.

// 1 e 2 e 3
app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;

  try {
    let type: string = req.query.type as string;
    const search = req.query.search;

    if (type) {
      type = type.toLocaleUpperCase();
      if (type in UserType) {
        const filterUsers = users.filter((user) => user.type === type);
        return res.status(200).send(filterUsers);
      }
      throw new Error("Invalid type");
    } else if (search) {
      const filterUser = users.filter((user) => user.name === search);
      if (filterUser.length === 0) {
        codeError = 404;
        throw new Error("User not found");
      }
      res.status(200).send(filterUser);
    } else {
      res.status(200).send(users);
    }
  } catch (error: any) {
    res.status(codeError).send(error.message);
  }
});

// 4. Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar
// coisas. Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método
// `POST` para adicionar um item ao nosso conjunto de usuários.

// a. Mude o método do endpoint para `PUT`. O que mudou?
// Só o método, pois a função continua funcionando da mesma forma que no método post.
// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// Acho que sim, já que não auterou minha requisição em nada, a menos que eu desconheça
//  algum problema futuro.

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, email, type, age } = req.body;
    if (!name || !email || !type || !age) {
      throw new Error("Params name, email, type and age, are required");
    }
    const newUser: User = {
      id: users.length + 1,
      name: name,
      email: email,
      type: type.toLocaleUpperCase(),
      age: age,
    };
    users.push(newUser);
    res.status(201).send(users);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.status(422).send(error.message);
    }
  }
});

app.put("/users", (req: Request, res: Response) => {
  try {
    const { name, email, type, age } = req.body;
    if (!name || !email || !type || !age) {
      throw new Error("Params name, email, type and age, are required");
    }
    const newUser: User = {
      id: users.length + 1,
      name: name,
      email: email,
      type: type.toLocaleUpperCase(),
      age: age,
    };
    users.push(newUser);
    res.status(201).send(users);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).end();
    } else {
      res.status(422).send(error.message);
    }
  }
});

// 5. Vamos alterar nosso último usuário. Crie um endpoint com o método PUT para
// alterar o nome do nosso usuário recém criado. Adicione em seu nome o sufixo -ALTERADO.
// Para este caso, encerre a request sem enviar uma resposta no body.

// app.put("/users/edit", (req: Request, res: Response) => {
app.put("/users/:id", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const { id } = req.params;

    users.forEach((user) => {
      if (user.id === Number(id)) {
        user.name += "-ALTERADO";
        return res.status(200).end();
      }
    });
    res.status(404).send("Usuário não encontrado");
  } catch (error: any) {
    res.status(codeError).send(error.message);
  }
});

// 6. Essa não! Alteramos um dado por engano. Vamos realterar nosso último usuário.
// Crie um endpoint com o método PATCH para alterar mais uma vez o nome do nosso usuário
// recém alterado. Adicione em seu nome o sufixo -REALTERADO.

app.patch("/users/:id", (req: Request, res: Response) => {
  let codeError: number = 400;

  try {
    const { id } = req.params;

    const reaffirmUser = users.find((user) => user.id === Number(id));
    if (!reaffirmUser) {
      codeError = 404;
      throw new Error("User not found");
    }
    reaffirmUser.name += "-REALTERADO";
    res.status(200).end();
  } catch (error: any) {}
});

// 7. Por fim, vamos remover este usuário de nossa lista. Crie um endpoint que receba
// um id em seu path e utilize-o para removê-lo da lista de usuários.

app.delete("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if (userIndex === -1) {
      errorCode = 404;
      throw new Error();
    }
    users.splice(userIndex, 1)
    res.status(200).send("Delete user successfully");

  } catch (error: any) {
    res.status(errorCode).send(error.message);

  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server`);
  }
});
