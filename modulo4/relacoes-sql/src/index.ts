import { Request, Response } from "express"
import app from "./app"
import connection from "./connection"

app.get("/test", (req: Request, res: Response) => {
    res.send("Hello World!");
  });



