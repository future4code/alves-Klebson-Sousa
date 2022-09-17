import Recipes from "../model/Recipes";
import { RecipeDB } from "../model/types";
import { BaseDataBase } from "./BaseDataBase";

class RecipeDataBase extends BaseDataBase {

  private static recipeTableName = "Recipes_Cookenu"

  insertRecipe = async (recipe: Recipes): Promise<void> => {
    try {
      await BaseDataBase.connection()
        .insert({
          id: recipe.getId(),
          title: recipe.getTitle(),
          description: recipe.getDescription(),
          creation_Date: recipe.getCreationDate(),
          user_id: recipe.getIdUser(),
        })
        .into(RecipeDataBase.recipeTableName);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  selectRecipeById = async (id: string): Promise<Recipes | undefined> => {
    try {
      const result: RecipeDB[] = await BaseDataBase.connection(
        RecipeDataBase.recipeTableName
      )
        .select("*")
        .where({ id });
      return Recipes.toRecipeModel(result[0]);
      // return result[0] && Recipes.toRecipeModel(result[0])
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  selectRecipe = async () => {
    const result = await BaseDataBase.connection(RecipeDataBase.recipeTableName).select(
      "id",
      "title",
      "description",
      "creation_Date",
      "user_id"
    );

    return result.map((recip) => {
      return recip;
    });
  };

  selectUserTitle = async (title: string): Promise<Recipes | undefined> => {
    const result: RecipeDB[] = await BaseDataBase.connection(RecipeDataBase.recipeTableName)
      .select("*")
      .where({ title });

    return Recipes.toRecipeModel(result[0]);
  };
}

export default RecipeDataBase;
