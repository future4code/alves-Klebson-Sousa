import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Amb2_User"

    public toUserDBModel = (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public createUser = async (user: User): Promise<void> => {
        const userDB = this.toUserDBModel(user)
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public login = () => {

    }

    public findUserByEmail = async (email: string): Promise<IUserDB> => {
        const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })

        return usersDB[0]
    }

    public findUserById = async (userId: string): Promise<IUserDB> => {
        const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ id: userId })

        return usersDB[0]
    }
}