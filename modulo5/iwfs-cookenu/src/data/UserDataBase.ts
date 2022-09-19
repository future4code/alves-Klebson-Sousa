import moment from "moment";
import Feed from "../model/Feed";
import { feedDB, UserDB } from "../model/types";
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
          role: user.getRole()
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
            result[0].password,
            result[0].role
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

  selectRecipesUserFeed = async (id:string): Promise<feedDB[]> => {

    // select Recipes_Cookenu.*, User_Cookenu.name from User_Cookenu_follow 
    // inner join User_Cookenu 
    // on 
    // User_Cookenu_follow.id_seguindo = User_Cookenu.id
    // inner join Recipes_Cookenu
    // on
    // User_Cookenu_follow.id_seguindo = Recipes_Cookenu.user_id
    // where User_Cookenu_follow.id_seguir = "ea5d65fb-d156-4a76-b636-0662876c4813";

    
      const result = await BaseDataBase.connection()
        .select(
          "Recipes_Cookenu.*",
          "User_Cookenu.name",          
        )
        .from("User_Cookenu_follow")
        .innerJoin(
          "User_Cookenu",
          "User_Cookenu_follow.id_seguindo",
          "User_Cookenu.id"
        )
        .innerJoin(
          "Recipes_Cookenu",
          "User_Cookenu_follow.id_seguindo",
          "Recipes_Cookenu.user_id"
        )
        .where({ "User_Cookenu_follow.id_seguir": `${id}` });
       
        const typeFeed = result.map((feed) => {
          console.log("feed", feed)
          const type : feedDB = {
            id:feed.id,
            title: feed.title,
            description:feed.description,
            creation_Date:moment(feed.creation_Date, "YYYY-MM-DD").format("DD/MM/YYY"),
            userId: feed.user_id,
            userName: feed.name
          }
          return type
        })

      return typeFeed;
   
  }

  async deleteFollowSeguir(idSeguir: string) {

    await BaseDataBase.connection()
        .delete()
        .from(UserDataBase.userTableFollow)
        .where({ id_seguir: idSeguir })
}

async deleteFollowSeguido(idSeguindo: string) {
    await BaseDataBase.connection()
        .delete()
        .from(UserDataBase.userTableFollow)
        .where({ id_seguindo: idSeguindo })
}

async deleteUser(id: string) {
    await BaseDataBase.connection()
        .delete()
        .from(UserDataBase.userTableName)
        .where({ id })
}
 
}

export default UserDataBase;
