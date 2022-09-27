import { resourceLimits } from "worker_threads";
import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Arq_Users";

  public toUserDBModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    }

    return userDB;
  };

  public createUser = async (user: User) => {
    const userDB = this.toUserDBModel(user);

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };

  public selectUserByEmail = async (email: string): Promise<User | undefined> => {
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
    .select("*")
    
    .where({email})

    return User.toUserModel(result[0])
  }

  public selectUserByName = async (name: string): Promise<User | undefined> => {
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
    .select("*")
    
    .where({name})

    return User.toUserModel(result[0])
  }

  public selectUsers = async (): Promise<User[] | undefined> => {
    const userDB = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
    .select("id", 
    "name",
    "email")  

    //return userDB.map((user: any) => new User(user.id, user.name, user.email, user.password)
    //)
    return userDB

  }

  public selectUserById = async (id: string): Promise<User | undefined> => {
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
    .select("*")
    
    .where({id})

    return User.toUserModel(result[0])
  }

  public deleteUser = async (id: string): Promise<void> => {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS)
    .delete()
    .where({id})
  }

}
