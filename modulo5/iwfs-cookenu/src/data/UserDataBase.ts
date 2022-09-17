import Feed from "../model/Feed";
import { UserDB } from "../model/types";
import User from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

class UserDataBase extends BaseDataBase {
  private static userTableName = "User_Cookenu";
  private static userTableFollow = "User_Cookenu_follow";

  selectUserByEmail = async (email: string): Promise<User | undefined> => {
    const result: UserDB[] = await BaseDataBase.connection(
      UserDataBase.userTableName
    )
      .select("*")
      .where({ email });
    // const userDb = result[0]

    return User.toUserModel(result[0]);
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
        .into(UserDataBase.userTableName);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  selectUserById = async (id: string): Promise<User | undefined> => {
    try {
      const result = await BaseDataBase.connection(UserDataBase.userTableName)
        .select("*")

        .where({ id });        

      return result[0]
        ? new User(
            result[0].id,
            result[0].name,
            result[0].email,
            result[0].password
          )
        : undefined;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  followPerson = async (
    idSeguir: string,
    userToUnfollowId: string
  ): Promise<void> => {
    await BaseDataBase.connection(UserDataBase.userTableFollow).insert({
      id_seguir: idSeguir,
      id_seguindo: userToUnfollowId,
    });
  };

  unfollowPerson = async (
    idSeguir: string,
    idSeguindo: string
  ): Promise<void> => {
    await BaseDataBase.connection(UserDataBase.userTableFollow)
      .where({
        id_seguir: idSeguir,
        id_seguindo: idSeguindo,
      })
      .delete();
  };

  selectRecipesUserFeed = async (userId: string): Promise<any> => {
    
      const result = await BaseDataBase.connection()
        .select(
          "Recipes_Cookenu.id as recipe_id",
          "Recipes_Cookenu.title",
          "Recipes_Cookenu.description",
          "Recipes_Cookenu.creation_Date",
          "User_Cookenu.id as user_id",
          "User_Cookenu.name"
        )
        .from("User_Cookenu_follow")
        .innerJoin(
          "User_Cookenu",
          "User_Cookenu.id",
          "User_Cookenu_follow.id_seguindo"
        )
        .innerJoin(
          "Recipes_Cookenu",
          "Recipes_Cookenu.user_id",
          "User_Cookenu_follow.id_seguindo"
        )
        .where({ id_seguir: userId });
        console.log(result)

      return result;
   
  };
}

export default UserDataBase;
