import { UserDB } from "../model/types";
import User from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

class UserDataBase extends BaseDataBase {
  // private static tableName = "User_Cookenu"

  selectUserByEmail = async (email: string): Promise<User | undefined> => {
    
      const result: UserDB[] = await BaseDataBase.connection("User_Cookenu")
        .select("*")        
        .where({ email });
        const userDb = result[0]
   
    return User.toUserModel(userDb)  

  };
  insertUser = async (user: User): Promise<void> => {
    try {
      await BaseDataBase.connection()
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into("User_Cookenu");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  selectUserById = async (id: string): Promise<User | undefined> => {
    try {
        const result = await BaseDataBase.connection("User_Cookenu")
            .select("*")
            
            .where({ id })
        
        return result[0] ? new User(result[0].id, result[0].email, result[0].password, result[0].role) : undefined
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
}


}

export default UserDataBase;
