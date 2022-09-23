import { IPostDB, Post } from "../models/Post";
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

    return postsData.map((post: any) => {
      const postData = new Post(
        post.id,
        post.content,
        post.user_id,
        post.likes
      );
      const postResponse = {
        id: postData.getId(),
        content: postData.getContent(),
        userId: postData.getUserId(),
        likes: postData.getLikes(),
      };
      return postResponse;
    });
  };

  removePost = async (idToDelete: string): Promise<void> => {
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
    .delete()
    .where({id: idToDelete})
  };

  selecttPostById = async (idToDelete: string) => {
    const result: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    )
      .select("*")
      .where({ id: idToDelete })
       
    return result[0];
  }

  selectLike = async (idUser: string, idPost: string) => {
    const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
    .select("*")
    .where({user_id: idUser})
    .andWhere({post_id: idPost})
  }
}
