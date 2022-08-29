import axios from "axios"
import { baseURL } from "./baseURL";
import app from "./app";
import { Request, Response } from "express";
import { subscriber } from "./data/types";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
  });

// 3.

// a) Não deu erro.
// b)Porque a saída dessa função pode receber qualquer tipo
const getAllSubscribers = async (): Promise<subscriber[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email
      }
    })
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
  