import { IPizzaDB, IPizzasIngredientsDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class PizzaDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Amb_Pizzas"
    public static TABLE_INGREDIENTS = "Amb_Ingredients"
    public static TABLE_PIZZAS_INGREDIENTS = "Amb_Pizzas_Ingredients"

    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {
        return {
            name: pizza.getName(),
            price: pizza.getprice(),
            image_url: pizza.getImageUrl()
        }
    }

    public getPizzas = async (): Promise<IPizzaDB[]> => {
        const result: IPizzaDB[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .select()

        return result
    }

    public getIngredients = async (pizza_name: string): Promise<string[]> => {
        const result: IPizzasIngredientsDB[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTS)
            .select("ingredient_name")
            .where({pizza_name})

        return result.map(item => item.ingredient_name)
    }

    public getPizzasFormatted = async (): Promise<any[]> => {
        const result: IPizzaDB[] = await BaseDatabase
            .connection.raw(`SELECT * FROM Amb_Pizzas
            JOIN Amb_Pizzas_Ingredients ON Amb_Pizzas_Ingredients.pizza_name = Amb_Pizzas.name;
            `)

        return result
    }
    // public createUser = async (user: User): Promise<void> => {
    //     const userDB = this.toUserDBModel(user)

    //     await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .insert(userDB)
    // }
}