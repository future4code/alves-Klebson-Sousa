import { Request, Response } from "express"
import selectUserType from "../data/selectUserType"

// b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por 
// tipo de user. O tipo de user deve ser passado por path params.


export const getUserType = async(req: Request,res: Response): Promise<void> =>{
    try {
       
       let type = req.params.type
       const users = await selectUserType(type )
 
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