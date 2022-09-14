import User from "../model/User";
import { IUserDB } from "../services/types";
import { BaseDataBase } from "./BaseDatabase";


class UserData extends BaseDataBase {
  insertUser = async (user: User) => {
    const userDB: IUserDB = await this.getConnection()
      .insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
      })
      .into("User")
      return userDB
  }

  async buscaUserPorEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ email });

    return result[0];
  }

  getUserById = async (id: string): Promise<User | undefined> => {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ id });        

      if(!result.length){
          return undefined
      }      
      return result[0] ? new User(result[0].id, result[0].email, result[0].password, result[0].role) : undefined

  }

  deleteUser = async (id: string): Promise<void> => {
    try {
        await this.getConnection()
            .delete()
            .from("User")
            .where({ id })
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
}
}
export default UserData;
