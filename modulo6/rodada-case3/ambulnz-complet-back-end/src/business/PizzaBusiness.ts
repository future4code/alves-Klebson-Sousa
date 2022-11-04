import { PizzaDatabase } from "../database/PizzaDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { IdGenerator } from "../services/IdGenerator";
import {
  IDeletePizzaInputDTO,
  IGetPizzasOutputDTO,
  IInsertPizzaInputDTO,
  IPizzaDB,
  IPizzasIngredientsDB,
  Pizza,
} from "../models/Pizza";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../database/UserDatabase";
import { USER_ROLES } from "../models/User";

export class PizzaBusiness {
  constructor(
    private pizzaDatabase: PizzaDatabase,
    private userDatabase: UserDatabase,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public insertPizza = async (input: IInsertPizzaInputDTO) => {
    const { name, price, imageUrl, ingredients, token } = input;

    if (!name || !price || !imageUrl || !ingredients) {
      throw new ParamsError("Preencha todos os campos!");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new ParamsError("Token inválido!");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new ConflictError(
        "Somente administradores podem adicionar pizzas!"
      );
    }

    const pizzaDB = await this.pizzaDatabase.getPizzabyName(name);

    if (pizzaDB) {
      throw new ConflictError("Esta pizza já existe no cardápio!");
    }

    const pizza: IPizzaDB = {
      name,
      price,
      image_url: imageUrl,
    };

    await this.pizzaDatabase.insertPizza(pizza);

    for (let ingredient of ingredients) {
      const ingredientsExist = await this.pizzaDatabase.findIngredientsByName(
        ingredient.name
      );

      if (ingredientsExist && !pizzaDB) {
        const pizzaIngredients: IPizzasIngredientsDB = {
          pizza_name: pizza.name,
          ingredient_name: ingredient.name,
        };
        await this.pizzaDatabase.insertPizzaIngredients(pizzaIngredients);
      } else {
        const ingredientsDB = {
          name: ingredient.name,
        };
        await this.pizzaDatabase.insertIngredients(ingredientsDB);
        const pizzaIngredients: IPizzasIngredientsDB = {
          pizza_name: pizza.name,
          ingredient_name: ingredient.name,
        };
        await this.pizzaDatabase.insertPizzaIngredients(pizzaIngredients);
      }
    }

    return { message: "Pizza inserida com sucesso!" };
  };

  public getPizzas = async (): Promise<IGetPizzasOutputDTO> => {
    const pizzasDB = await this.pizzaDatabase.getPizzas();

    const pizzas: Pizza[] = [];

    for (let pizzaDB of pizzasDB) {
      const pizza = new Pizza(
        pizzaDB.name,
        pizzaDB.price,
        pizzaDB.image_url,
        []
      );
      const ingredients = await this.pizzaDatabase.getIngredients(pizzaDB.name);

      pizza.setIngredients(ingredients);

      pizzas.push(pizza);
    }

    const response: IGetPizzasOutputDTO = {
      message: "Pizzas retornadas com sucesso!",
      pizzas: pizzas.map((pizza) => ({
        name: pizza.getName(),
        price: pizza.getprice(),
        imageUrl: pizza.getImageUrl(),
        ingredients: pizza.getIngredients(),
      })),
    };

    return response;
  };

  public getPizzasV2 = async () => {
    const pizzasFormatted = await this.pizzaDatabase.getPizzasFormatted();

    const pizzas: any = [];

    for (let pizzaDB of pizzasFormatted) {
      const pizzaAlreadyOnArray = pizzas.find(
        (pizza: any) => pizza.name === pizzaDB.name
      );

      if (pizzaAlreadyOnArray) {
        pizzaAlreadyOnArray.ingredients.push(pizzaDB.ingredient_name);
      } else {
        const pizza = {
          name: pizzaDB.name,
          price: pizzaDB.price,
          imageUrl: pizzaDB.image_url,
          ingredients: [pizzaDB.ingredient_name],
        };

        pizzas.push(pizza);
      }

      return {
        pizzas,
      };
    }
  };

  public deletePizza = async (input: IDeletePizzaInputDTO) => {
    const { token, name } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new ParamsError("Token inválido!");
    }

    const pizzaDB = await this.pizzaDatabase.getPizzabyName(name);

    if (!pizzaDB) {
      throw new NotFoundError("Pizza não encontrada!");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new ConflictError("Somente administradores podem deletar pizzas!");
    }

    await this.pizzaDatabase.deletePizzaIngredients(name);
    await this.pizzaDatabase.deletePizza(name);

    const response = {
      message: "Pizza deletada com sucesso!",
    };

    return response;
  };
}
