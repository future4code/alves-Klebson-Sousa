import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

// exercicio 2

type Users = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
  post: {
    // exercicio 5
    title: string;
    body: string;
    userId: number;
  }[];
};

// exercicio 3

let usuarios: Users[] = [
  {
    id: 1,
    name: "Jac",
    phone: 999999999,
    email: "jac@gmail.com",
    website: "www.estouaqui.com.br",
    post: [
      //exercicio 6 Acho melhor criá-los dentro do array, já que cada usuário terá seu post.
      {
        title: "Ser ou não ser",
        body: "O que tem pra hoje?",
        userId: 1,
      },
      {
        title: "É isso aí",
        body: "Não sei de nada",
        userId: 2,
      },
    ],
  },
  {
    id: 2,
    name: "Bob",
    phone: 444444444,
    email: "bob@gmail.com",
    website: "www.aquiquinoisfica.com.br",
    post: [
      {
        title: "Estou tentando",
        body: "O bicho tá pegando",
        userId: 3,
      },
      {
        title: "Será?",
        body: "Talvez",
        userId: 4,
      },
    ],
  },
  {
    id: 3,
    name: "Juca",
    phone: 555555555,
    email: "juca@gmail.com",
    website: "www.ummaisum.com.br",
    post: [
      {
        title: "Teste",
        body: "Teste do teste",
        userId: 5,
      },
      {
        title: "Teste2",
        body: "Teste do teste 2",
        userId: 6,
      },
    ],
  },
  {
    id: 4,
    name: "Dari",
    phone: 666666666,
    email: "dari@gmail.com",
    website: "www.fiqueavontade.com.br",
    post: [
      {
        title: "Teste3",
        body: "Teste do teste3",
        userId: 7,
      },
      {
        title: "Teste4",
        body: "Teste do teste 4",
        userId: 8,
      },
    ],
  },
  {
    id: 5,
    name: "Tadeu",
    phone: 777777777,
    email: "tadeu@gmail.com",
    website: "www.voceeeu.com.br",
    post: [
      {
        title: "Teste5",
        body: "Teste do teste5",
        userId: 5,
      },
      {
        title: "Teste6",
        body: "Teste do teste 6",
        userId: 6,
      },
    ],
  },
  {
    id: 6,
    name: "Divino",
    phone: 888888888,
    email: "divino@gmail.com",
    website: "www.novaestacao.com.br",
    post: [
      {
        title: "Teste7",
        body: "Teste do teste7",
        userId: 5,
      },
      {
        title: "Teste8",
        body: "Teste do teste 8",
        userId: 6,
      },
    ],
  },
];

// exercício 1
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express");
});

// exercicio 4

app.get("/users", (req: Request, res: Response) => {
  const todosUsuarios = usuarios.map((usuario) => {
    return usuario;
  });
  console.log("Usuarios", todosUsuarios);
  res.send(todosUsuarios);
});

// exercicio 7

app.get("/posts", (req: Request, res: Response) => {
  const todosUsuarios = usuarios
    .map((usuario) => {
      return usuario.post;
    })
    .flat();
  const listaPosts = todosUsuarios
    .map((post) => {
      return post;
    })
    .flat();
  console.log(listaPosts);
  res.send(listaPosts);
});

// exercicio 8

app.get("/posts/:userId", (req: Request, res: Response) => {
  const userId = req.params.userId;
  const todosUsuarios = usuarios
    .map((usuario) => {
      return usuario.post;
    })
    .flat();
  const posts = todosUsuarios
    .map((post) => {
      return post
    }).filter((post) => post.userId=== Number(userId))
    .flat();
  
  res.send(posts);
});
