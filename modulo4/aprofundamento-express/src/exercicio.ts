import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});

// 2. Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres
// (”todos”). Crie uma variável de tipo para representar cada afazer.

type Afazer = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// 3. Crie um array de afazeres para servir como base de dados da nossa API e utilize
// a tipagem desenvolvida no exercício anterior.

let afazeres: Afazer[] = [
  {
    userId: 1,
    id: 1,
    title: "Limpar piscina",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Cuidar da loginha",
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: "Lavar o quintal",
    completed: true,
  },
  {
    userId: 2,
    id: 4,
    title: "Fazer os exercícios",
    completed: true,
  },
  {
    userId: 2,
    id: 5,
    title: "Trocar as lâmpadas queimadas",
    completed: false,
  },
  {
    userId: 3,
    id: 6,
    title: "Completar a água da piscina ",
    completed: false,
  },
  {
    userId: 3,
    id: 7,
    title: "Fazer compras",
    completed: false,
  },
];

// 4. Construa um endpoint que retorne todos os afazeres do exercício anterior de
// acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

app.get("/afazeres/status", (req: Request, res: Response) => {
  const tarefasAfazer = afazeres.filter((afazer) => {
    if (afazer.completed) {
      return afazer.title;
    }
  });
  res.send(tarefasAfazer);
});

// 5. Construa um endpoint de criação de afazer. A resposta deve retornar o array de
// afazeres atualizado.
app.post("/afazeres", (req: Request, res: Response) => {
  const { idUser, title, completed } = req.body;
  // const novaTarefa = afazeres.find((tarefa) => tarefa.id === idUser)

  afazeres.push({
    id: Date.now(),
    title: title,
    completed: completed,
    userId: idUser,
  });
  res.send("Tarefa criada");
});

// 6. Construa um endpoint de edição do status de um afazer, ou seja, de completo para
// incompleto e vice-versa.

app.put("/afazeres/status/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  afazeres.forEach((tarefa) => {
    if (tarefa.id === id) {
      return (tarefa.completed = !tarefa.completed);
    }
  });
  res.send(afazeres);
});

// 7. Construa um endpoint que deleta um determinado afazer de acordo com sua id.

app.delete("/afazeres/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  afazeres = afazeres.filter((tarefa) => {
    return tarefa.id !== id;
  });
  res.send(afazeres)
});

// 8. Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

app.get("/afazeres/tarefas/:userId", (req: Request, res: Response) => {
    res.send({
        tarefas: {
            
        }
    })
})

app.listen(3003, () => {
  console.log("Meu servidor está rodando na porta 3003");
});
