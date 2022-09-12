import { User } from "../types/typesUsers"
import { connection } from "./connection"

const selectUser = async (userId: string): Promise<User | undefined> => {
    const [result] = await connection("labecommerce_users")
    .select("*")
    .where("id", userId)    
    return result
}

export default selectUser