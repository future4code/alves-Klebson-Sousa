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
   
    for (const subscriber of subscribers) {
      try {
        await axios.post(`${baseURL}/notifications`, {
          subscriberId: subscriber.id,
          message
        });
        console.log(`Notificação enviada a ${subscriber.name}`);
      } catch (error) {
        console.log(`Erro ao enviar noticação par ${subscriber.name}`);
      }
    }
  };
  
  const main = async (): Promise<void> => {
    try {
        await createNews("Vida minha", "Só dificuldades", Date.now() );

      const subscribers = await getAllSubscribers();
      await notifyAllSubscribers(subscribers, "Mensagen eviada")
      console.log(subscribers);
    } catch (error: any) {
      const resp = error.res?.data || error.message;
      console.log(resp);
    }
  };
  main();