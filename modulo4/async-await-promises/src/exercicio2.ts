import axios from "axios"
import { baseURL } from "./baseURL";
import app from "./app";
import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
  });

// 2. 
// a) Pelo que entendi é que a nomeada começa com async function e o nome da função, 
// e a arrow function começa com uma const seguido do nome da função
// b)
const getAllSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

  const main = async (): Promise<void> => {
    try {
      const subscribers = await getAllSubscribers();
      console.log(subscribers);
    } catch (error: any) {
      const resp = error.res?.data || error.message;
      console.log(resp);
    }
  };
  main();