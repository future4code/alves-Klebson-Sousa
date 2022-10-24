import { PizzaDatabase } from "../database/PizzaDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { ConflictError} from "../errors/ConflictError"
import { ParamsError} from "../errors/ParamsError"
import { IdGenerator } from "../services/IdGenerator"
import { IGetPizzasOutputDTO, IPizzaDB, Pizza } from "../models/Pizza"

export class PizzaBusiness {
    constructor(
        private pizzaDatabase: PizzaDatabase,
        private idGenerator: IdGenerator
    ) {}

    public getPizzas = async (): Promise<IGetPizzasOutputDTO> => {        
        
        const pizzasDB = await this.pizzaDatabase.getPizzas()

        const pizzas: Pizza[] = []

        for (let pizzaDB of pizzasDB) {
            const pizza = new Pizza(
                    pizzaDB.name,
                    pizzaDB.price,
                    []
                )
            const ingredients = await this.pizzaDatabase.getIngredients(pizzaDB.name)
               
            pizza.setIngredients(ingredients)

            pizzas.push(pizza)
        }


        const response: IGetPizzasOutputDTO = {
            message: "Pizzas retornadas com sucesso",
            pizzas: pizzas.map((pizza) => ({
                name: pizza.getName(),
                price: pizza.getprice(),
                ingredients: pizza.getIngredients()
            }))
        }

        return response
    }

    public getPizzasV2 = async () => {
        const pizzasFormatted = await this.pizzaDatabase.getPizzasFormatted()

        const pizzas: any = []

        for (let pizzaDB of pizzasFormatted) {
            const pizzaAlreadyOnArray = pizzas.find((pizza: any) => pizza.name === pizzaDB.name)

            if (pizzaAlreadyOnArray) {
                pizzaAlreadyOnArray.ingredients.push(pizzaDB.ingredient_name)
            } else {
                const pizza = {
                    name: pizzaDB.name,
                    price: pizzaDB.price,
                    ingredients: [pizzaDB.ingredient_name]
                }

                pizzas.push(pizza)
            }

            return {
                pizzas
            }
        }
    }

}