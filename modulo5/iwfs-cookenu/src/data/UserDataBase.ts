import User from "../model/User"
import { BaseDataBase } from "./BaseDataBase"

class UserDataBase extends BaseDataBase {
    selectUserByEmail = async (email:string): Promise<User> => {
        try {
            const user = await BaseDataBase.connection("User_Cookenu")
            .select("*")
            .where({email})
            return new User(user[0].id, user[0].name, user[0].email, user[0].password)
        } catch (error: any) {            
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

export default UserDataBase 