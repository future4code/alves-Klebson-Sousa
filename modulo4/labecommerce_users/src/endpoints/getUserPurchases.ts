import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"
import selectUserPurchases from "./selectUserPurchases"


const getUserPurchases =async (req: Request, res:Response): Promise<void> => {
    try {
        const result = await selectAllUsers()

        for(const user of result) {
            
            const purchases = await selectUserPurchases(user.id) 
            user.purchases = purchases  
            if(purchases.lengh === 0) {
                user.purchases = []
            }            
        }        
        res.send(result)
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}
    
export default getUserPurchases