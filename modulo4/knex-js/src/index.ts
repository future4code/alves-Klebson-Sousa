import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Exercício 1
// a) Vai me retornar tudo que temos no mySql

// b)
const getActorByName = async (name: string): Promise<any> => {
  const [result] = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `);
  console.log(result);
  return result;
};

// getActorByName("Glória Pires")
// (async() => {

//     console.log(await getActorByName("Glória Pires")) // <=
// })()

// c)
const getCountActorGender = async (gender: string): Promise<any> => {
  const [result] = await connection.raw(`
    SELECT COUNT(*) as contagem FROM Actor WHERE gender = '${gender}'
    `);

  return result[0];
};

// 2.
// a)
const updateSalary = async (id: string, salary: number): Promise<any> => {
  const result = await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
  return result;
};

// b)
const deleteActor = async (id: string): Promise<any> => {
  const result = await connection("Actor").delete().where("id", id);
  return result;
};

// c)
const averageSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary")
    .where("gender", gender); //não entendi como retornar a media se não há salario
};

const getActorById = async (id: string): Promise<any> => {
  const [result] = await connection.raw(`
          SELECT * FROM Actor WHERE id = ${id}
      `);
  return result;
};

const postCriateActor = async (
  name: string,
  salary: number,
  birth_date: string,
  gender: string,
  favorite_ice_cream_flavor: string
): Promise<any> => {
  const result = await connection("Actor").insert({
    id: Date.now().toString(),
    name: name,
    salary: salary,
    birth_date: birth_date,
    gender: gender,
    favorite_ice_cream_flavor: favorite_ice_cream_flavor,
  });
  return result;
};

const createFilm = async (  
  name: string,
  synopsis: string,
  launch_date: Date,
  evaluation: number,
  playing_limit_date: Date
): Promise<any> => {
  const result = await connection("Films").insert({
    id: Date.now,
    name: name,
    synopsis: synopsis,
    launch_date: launch_date,
    evaluation: evaluation,
    playing_limit_date: playing_limit_date,
  });

  return result;
};

// 3.
// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// b)
app.get("/actor/count", async (req: Request, res: Response) => {   //????
  try {
    const count: string = await getCountActorGender(req.query.gender as string);
    res.status(200).send(count);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// 4.
app.post("/actor/create", async (req: Request, res: Response) => {
  try {
    const { name, salary, birth_date, gender, favorite_ice_cream_flavor } =
      req.body;
    await postCriateActor(
      name,
      salary,
      birth_date,
      gender,
      favorite_ice_cream_flavor
    );
    res.status(201).send("Ator criado com sucesso!");
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// a)

app.put("/actors/salary", async (req: Request, res: Response) => {
  try {
    const { id, salary } = req.body;

    await updateSalary(id, salary);

    res.status(200).send("Salário atualizado com sucesso!");
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// b)
app.delete("/actor/delete/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteActor(id);
    res.status(200).send("Ator deletado com sucesso");
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
// 5.
app.post("/film/create", async (req: Request, res: Response) => {    //????
  try {
    const { name, synopsis, launch_date, evaluation, playing_limit_date } =
      req.body;

    await createFilm(      
      name,
      synopsis,
      launch_date,
      evaluation,
      playing_limit_date
    );

    res.status(201).send("Filme criado com sucesso!");
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
