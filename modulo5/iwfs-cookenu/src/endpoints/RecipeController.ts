import { Request, Response } from "express";
import RecipeDataBase from "../data/RecipeDataBase";
import Recipes from "../model/Recipes";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

class RecipeController {
  createRecipe = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { title, description } = req.body;

      if (!title || !description) {
        res.statusCode = 422;
        throw new Error("Os campos title e description devem ser preenchidos!");
      }

      if (!token) {
        res.statusCode = 400;
        throw new Error("Insira um token");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Invalid token");
      }

      const id = new GenerateId().generateIds();

      const creationDate = new Date().toString();

      const newRecipe = new Recipes(
        id,
        title,
        // creationDate,
        description,
        tokenData.id
      )

      const recipeDB = new RecipeDataBase()
      await recipeDB.insertRecipe(newRecipe)

      res.status(200).send({
        message: "Recipe created successfully",
        id
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };
}

export default RecipeController;
