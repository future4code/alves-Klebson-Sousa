import { Request, Response } from "express";
import app from "./app";
import { baseURL } from "./baseURL";
import axios from "axios"

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});


// 1. 
// a) Get
// b) Usamos o await
// c) 
async function getAllSubscribers(): Promise<any[]> {
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
