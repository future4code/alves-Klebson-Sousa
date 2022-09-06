import axios from "axios";
import { baseURL } from "./baseURL";
import app from "./app";
import { Request, Response } from "express";
import { subscriber } from "./data/types";


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// a)Tipo any, porque recebe tanto string quanto number

// b)

const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  await axios.put(`${baseURL}/news`, { title, content, date })
  .then((res) => {
    console.log("Sucesso")
  })
};

const getAllSubscribers = async (): Promise<subscriber[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const main = async (): Promise<void> => {
  try {
    await createNews("Vida minha", "Só dificuldades", Date.now() );
    const subscribers = await getAllSubscribers();
    console.log(subscribers);
  } catch (error: any) {
    const resp = error.res?.data || error.message;
    console.log(resp);
  }
};
main();
