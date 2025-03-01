import { Request, Response } from "express"
import selectUserName from "../data/selectUserName"

// 1.
// a)  Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um 
// parâmetro de filtragem por nome. Este nome deve ser enviado por query params.

export const getUserName = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name = req.query.name || "" 
      
      const users = await selectUserName(name as string)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}