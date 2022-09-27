import { PostDatabase } from "../database/PostDatabase";
import {
  createPostInputDTO,
  IDeletePostInputDTO,
  ILikeDataInputDTO,
  ILikeDB,
  messageOutputDTO,
  Post,
} from "../models/Post";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public creatPost = async (input: createPostInputDTO) => {
    const token = input.token;
    const content = input.content;
    const userId = input.userId;

    if (!token || !content || !userId) {
      throw new Error("One or more parameters missing");
    }

    if (typeof content !== "string" || content.length < 1) {
      throw new Error("Invalid 'content' parameter");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new Error("Invalid token");
    }

    const newIdPost = this.idGenerator.generate();

    const newPost = new Post(newIdPost, content, userId);

    await this.postDatabase.insertPost(newPost);

    const response: messageOutputDTO = {
      message: "Post created successfully",
    };

    return response;
  };

  getPosts = async (token: string) => {
    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new Error("Enter a valid token");
    }

    const postData = await this.postDatabase.selectPosts();

    const posts = postData.map((post) => {
      return new Post(post.id, post.content, post.user_id);
    });
    for (let post of posts) {
      const idPost = post.getId();
      const likes = await this.postDatabase.selectLikes(idPost);
      post.setLikes(likes);
    }
    return posts;
  };

  deletePost = async (input: IDeletePostInputDTO) => {
    const token = input.token;
    const idToDelete = input.idToDelete;

    if (!token) {
      throw new Error("Please provide a token");
    }

    if (!idToDelete || idToDelete === ":id") {
      throw new Error("Please provide an id");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new Error("Invalid token");
    }

    const post = await this.postDatabase.selecttPostById(idToDelete);

    if (!post) {
      throw new Error("Post not found");
    }

    if (tokenData.role === USER_ROLES.NORMAL && post.user_id !== tokenData.id) {
      throw new Error("You are not allowed to remove this post");
    }

    await this.postDatabase.removePost(idToDelete);

    const response: messageOutputDTO = {
      message: "Recipe removed successfully",
    };

    return response;
  };

  likePost = async (input: ILikeDataInputDTO) => {
    const token = input.token;
    const idPost = input.idPost;

    if (!token) {
      throw new Error("Provide a token through login");
    }

    if (!idPost) {
      throw new Error("Enter the desired post ID in the parameter");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new Error("Invalid token");
    }
    const post = await this.postDatabase.selecttPostById(idPost);
    if (!post) {
      throw new Error("Post not found");
    }

    const idLike = this.idGenerator.generate();

    const likeDB = await this.postDatabase.findLike(idPost, tokenData.id);

    if (likeDB) {
      throw new Error("You already liked");
    }

    const newLike: ILikeDB = {
      id: idLike,
      post_id: idPost,
      user_id: tokenData.id
    }
    
      await this.postDatabase.insertLike(newLike);
    

    const response: messageOutputDTO = {
      message: "Like ok",
    };
    return response;
  };

  dislikePost = async (input: ILikeDataInputDTO) => {
    const token = input.token;
    const idPost = input.idPost;

    if (!token) {
      throw new Error("Provide a token through login");
    }

    if (!idPost) {
      throw new Error("Enter the desired post ID in the parameter");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new Error("Invalid token");
    }
    const post = await this.postDatabase.selecttPostById(idPost);
    if (!post) {
      throw new Error("Post not found");
    }

    const idLike = this.idGenerator.generate();

    const likeDB = await this.postDatabase.findLike(idPost, tokenData.id);
    
    if (!likeDB) {
      throw new Error(
        "You can only dislike a post that you have previously liked"
      );
    }
    
      await this.postDatabase.removeLike(idPost, tokenData.id);
  

    const response: messageOutputDTO = {
      message: "Dislike ok",
    };
    return response;
  };
}
