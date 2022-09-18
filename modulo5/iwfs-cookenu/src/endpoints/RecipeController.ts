import { Request, Response } from "express";
import RecipeDataBase from "../data/RecipeDataBase";
import Recipes from "../model/Recipes";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import moment from "moment";
import { USER_ROLES } from "../model/User";

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
      const newDate = new Date();

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
        res.statusCode = 404;
        throw new Error("Receita não existe");
      }

      recipe.setDate(
        moment(recipe.getCreationDate(), "YYYY-MM-DD HH:mm:ss").format(
          "DD/MM/YYYY"
        )
      );

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

  editRecipe = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const idRecipe = req.params.id;
      const { title, description } = req.body;

      if (!token) {
        res.statusCode = 404;
        throw new Error("O token deve ser passado");
      }

      if (!title && !description) {
        res.statusCode = 404;
        throw new Error(
          "Os parâmetros title e description devem ser passados!"
        );
      }

      const idPerson = new Authenticator().getTokenData(token); // id está chegando nulo

      const recipeDataBase = new RecipeDataBase();

      const recipeById = await recipeDataBase.selectRecipeById(idRecipe);
      console.log(idPerson);

      if (!recipeById) {
        throw new Error("Receita não encontrada");
      }

      if (
        idPerson.role === USER_ROLES.NORMAL &&
        recipeById.getIdUser() !== idPerson.id
      ) {
        throw new Error(
          "Somente administradores podem editar receitas de outros usuarios"
        );
      }

      const response = await recipeDataBase.updateRecipe(
        idRecipe,
        title,
        description
      );

      res
        .status(200)
        .send({ message: "Receita auterada com sucesso!", response });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  async deleteRecipe(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const idRecipe = req.params.id;

      if (!token) {
        res.statusCode = 404;
        throw new Error("O token deve ser passado");
      }

      const idPerson = new Authenticator().getTokenData(token);

      const recipeData = new RecipeDataBase();

      const recipeById = await recipeData.selectRecipeById(idRecipe); //id do recipeByid vindo undefined

      if (!recipeById) {
        throw new Error("Receita não encontrada");
      }
      console.log(recipeById.getIdUser(), "=", idPerson.id);

      if (
        idPerson.role === USER_ROLES.NORMAL &&
        recipeById.getIdUser() !== idPerson.id
      ) {
        throw new Error(
          "Somente administradores podem editar receitas de outros usuarios"
        );
      }

      await recipeData.deleteRecipe(idRecipe);

      res.status(200).send({ message: "Receita deletada com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}

export default RecipeController;
