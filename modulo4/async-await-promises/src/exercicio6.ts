import axios from "axios";
import { baseURL } from "./baseURL";
import app from "./app";
import { Request, Response } from "express";
import { subscriber } from "./data/types";


app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
  });


  

  
  const createNews = async (
    title: string,
    content: string,
    date: number
  ): Promise<void> => {
    await axios.put(`${baseURL}/news`, { title, content, date });
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

  const notifyAllSubscribers = async (subscribers: subscriber[], message: string): Promise<void> => {

    try {
      const requests = subscribers.map((subscriber) =>
        axios.post(`${baseURL}/notifications`, {
          subscriberId: subscriber.id,
          message,
        })
      );
  
      await Promise.all(requests);
  
      console.log(`Notificação enviada com sucesso`);
    } catch (error) {
      console.log(`Erro ao enviar noticação`);
    }
  };
  
  const main = async (): Promise<void> => {
    try {
      createNews("Nova Onda", "Melhor surfar na areia do que afogar no mar", Date.now())
      const subscribers = await getAllSubscribers();
      await notifyAllSubscribers(subscribers, "Tamo junto e misturado")
      console.log(subscribers);
    } catch (error: any) {
      const resp = error.res?.data || error.message;
      console.log(resp);
    }
  };
  main();