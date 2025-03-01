import { ILikeDB, IPostDB, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "labook_posts";
  public static TABLE_LIKES = "labook_likes";

  insertPost = async (newPost: Post) => {
    const postData: IPostDB = {
      id: newPost.getId(),
      content: newPost.getContent(),
      user_id: newPost.getUserId(),
    };

    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(postData);
  };

  selectPosts = async () => {
    const postsData = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    ).select("*");

    return postsData;
  };

  removePost = async (idToDelete: string): Promise<void> => {
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
      .delete()
      .where({ id: idToDelete });
  };

  selecttPostById = async (idToDelete: string) => {
    const result: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    )
      .select("*")
      .where({ id: idToDelete });

    return result[0];
  };

  selectLikes = async (idPost: string) => {
    const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .select()
      .count()
      .where({ post_id: idPost });

    return result[0]["count(*)"] as number;
  };

  insertLike = async (likeDB: ILikeDB) => {
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES).insert(likeDB);
  };

  findLike = async (idPost: string, idUser: string) => {
    const result: ILikeDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_LIKES
    )
      .select()
      .where({ post_id: idPost })
      .andWhere({ user_id: idUser });

    return result[0];
  };

  removeLike = async (idPost: string, idUser: string) => {
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .delete()
      .where({post_id: idPost})
      .andWhere({ user_id: idUser });
  };
}
