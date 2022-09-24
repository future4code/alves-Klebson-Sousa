import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/postController";
import { PostDatabase } from "../database/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

postRouter.post("/create", postController.createPost)

postRouter.get("/", postController.getPosts)

postRouter.post("/like/:id", postController.likePost)
postRouter.post("/dislike/:id", postController.dislikePost)
postRouter.delete("/delete/:id", postController.deletePost)