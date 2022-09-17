import { Request, Response } from "express";
import RecipeDataBase from "../data/RecipeDataBase";
import Recipes from "../model/Recipes";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import moment from "moment"

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

      const recipeDB = new RecipeDataBase();

      const recipe = await recipeDB.selectUserTitle(title);

      if (recipe) {
        res.statusCode = 400;
        throw new Error("Receita já existe");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Invalid token");
      }

      const id = new GenerateId().generateIds();
      const newDate = new Date()
      
      const newRecipe = new Recipes(
        id,
        title,
        description,
        newDate,
        tokenData.id
      );

      await recipeDB.insertRecipe(newRecipe);

      res.status(200).send({
        message: "Receita criada com successo!",
        id,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getRecipeById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

      if (!token || !id) {
        res.statusCode = 422;
        throw new Error("Insira um token e um id");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Não autorizado, token inválido");
      }

      const recipeDB = new RecipeDataBase();

      const recipe = await recipeDB.selectRecipeById(id);        

      if (!recipe) {
        res.statusCode = 404
        throw new Error("Receita não existe")
    }

    recipe.setDate(moment(recipe.getCreationDate(), "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY")
  )

      res.status(200).send({
        recipe,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getRecipe = async (req: Request, res: Response) => {
    try {
      const recipeDB = new RecipeDataBase();

      const recipe = await recipeDB.selectRecipe();

      res.status(200).send({
        recipe,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };
}

export default RecipeController;
