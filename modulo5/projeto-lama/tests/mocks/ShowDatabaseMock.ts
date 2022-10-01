import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IShowDB, Show } from "../../src/models/Show";

export class ShowDatabaseMock extends BaseDatabase {
  public static TABLE_Shows = "Lama_Shows";

  public toShowDBModel = (show: Show): IShowDB => {
    console.log("aqui");
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      starts_at: show.getStartsAt(),
    };

    return showDB;
  };

  public findShowByStartsAt = async (
    startsAt: Date
  ): Promise<IShowDB | undefined> => {
    // const result: IShowDB[] = await BaseDatabase
    //     .connection(ShowDatabase.TABLE_Shows)
    //     .select()
    //     .where({ starts_at:startsAt })

    // return result[0]
    switch (startsAt) {
      case new Date("2022-12-06"):
        return {
          id: "201",
          band: "Coragem",
          starts_at: new Date("2022-12-06"),
        };

      default:
        return undefined;
    }
  };

  public findShowById = async (
    showId: string
  ): Promise<IShowDB | undefined> => {
    // const result: IShowDB[] = await BaseDatabase
    //     .connection(ShowDatabase.TABLE_Shows)
    //     .select()
    //     .where({ id: showId })

    // return result[0]
    switch (showId) {
      case "201":
        return {
          id: "201",
          band: "Coragem",
          starts_at: new Date("2022-12-06"),
        };

      default:
        return undefined;
    }
  };

  public insertShow = async (show: Show): Promise<void> => {};

  public selectShows = async (): Promise<IShowDB[]> => {
    // const showsDB: IShowDB[] = await BaseDatabase
    // .connection(ShowDatabase.TABLE_Shows)
    // .select()
    // return showsDB
    const shows: IShowDB[] = [
      {
        id: "201",
        band: "Coragem",
        starts_at: new Date("2022-12-06"),
      },
      {
        id: "202",
        band: "Sorte",
        starts_at: new Date("2022-12-07"),
      },
      {
        id: "203",
        band: "Percistente",
        starts_at: new Date("2022-12-08"),
      },
    ];
    return shows;
  };

  

  public getLikes = async (postId: string): Promise<number> => {
    // const result: any = await BaseDatabase
    //     .connection(PostDatabase.TABLE_LIKES)
    //     .select()
    //     .count("id AS likes")
    //     .where({ post_id: postId })

    // return result[0].likes as number

    if (postId == "201") return 1;

    return 0;
  };

//   public findPostById = async (
//     postId: string
//   ): Promise<IPostDB | undefined> => {
    // const postsDB: IPostDB[] = await BaseDatabase
    //     .connection(PostDatabase.TABLE_POSTS)
    //     .select()
    //     .where({ id: postId })

    // return postsDB[0]

//     switch (postId) {
//       case "201":
//         return {
//           id: "201",
//           content: "Olá, sou novo por aqui!",
//           user_id: "101",
//         };

//       default:
//         return undefined;
//     }
//   };

  public deletePost = async (postId: string): Promise<void> => {
    // await BaseDatabase
    //     .connection(PostDatabase.TABLE_POSTS)
    //     .delete()
    //     .where({ id: postId })
  };

//   public findLike = async (
//     postId: string,
//     userId: string
//   ): Promise<ILikeDB | undefined> => {
//     // const likesDB: ILikeDB[] = await BaseDatabase
//     //     .connection(PostDatabase.TABLE_LIKES)
//     //     .select()
//     //     .where({ post_id: postId })
//     //     .andWhere({ user_id: userId })

//     // return likesDB[0]

//     if (postId == "201" && userId == "id-mock") {
//       return {
//         id: "301",
//         post_id: "201",
//         user_id: "id-mock",
//       };
//     }

//     return undefined;
//   };

//   public addLike = async (likeDB: ILikeDB): Promise<void> => {
    // await BaseDatabase
    //     .connection(PostDatabase.TABLE_LIKES)
    //     .insert(likeDB)
//   };

  public removeLike = async (postId: string, userId: string): Promise<void> => {
    // await BaseDatabase
    //     .connection(PostDatabase.TABLE_LIKES)
    //     .delete()
    //     .where({ post_id: postId })
    //     .andWhere({ user_id: userId })
  };
}
