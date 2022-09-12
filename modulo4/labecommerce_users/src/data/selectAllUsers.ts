import { User } from "../types/typesUsers"
import { connection } from "./connection"



const selectAllUsers = async (): Promise<any> => {
    const result: any = await connection("labecommerce_users")
    .select({
        id: "id",
        name: "name",
        email: "email"
    })  
    return result
}
export default selectAllUsers