import { User } from "../types/typesUsers"
import { connection } from "./connection"



const selectAllUsers = async (): Promise<User[]> => {
    const result: User[] = await connection("labecommerce_users")
    .select("*")  
    return result
}
export default selectAllUsers