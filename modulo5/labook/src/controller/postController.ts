import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostInputDTO, IDeletePostInputDTO, ILikeDataInputDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try {
            const input: createPostInputDTO = {
                token: req.headers.authorization,
                content: req.body.content,
                userId: req.body.userId
            }

            const response = await this.postBusiness.creatPost(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    getPosts = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization

            const response = await this.postBusiness.getPosts(token)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
            
        }
    }

    deletePost = async (req: Request, res: Response) => {
        try {
            const input: IDeletePostInputDTO = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    likePost = async (req: Request, res: Response) => {
        try{
            const input: ILikeDataInputDTO = {
                token: req.headers.authorization,
                idPost: req.params.idPost
            }

            const response = await this.postBusiness.likePost(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}