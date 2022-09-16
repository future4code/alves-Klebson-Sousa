import Recipes from "../model/Recipes"
import { BaseDataBase } from "./BaseDataBase";


class RecipeDataBase extends BaseDataBase{
    // private static tableName = "Recipes_Cookenu"
    insertRecipe = async (recipe: Recipes): Promise<void> => {
        try {
          await BaseDataBase.connection()
            .insert({
              id: recipe.getId(),
              title: recipe.getTitle(),
              description: recipe.getDescription(),
            //   creation_Date: recipe.getCreationDate(),
              user_id: recipe.getIdUser()
            })
            .into("Recipes_Cookenu");
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }


}

export default RecipeDataBase