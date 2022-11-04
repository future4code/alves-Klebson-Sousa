import { Router } from 'express'
import { PizzaBusiness } from '../business/PizzaBusiness'
import { PizzaController } from '../controller/PizzaController'
import { PizzaDatabase } from '../database/PizzaDatabase'
import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const pizzaRouter = Router()

const pizzaController = new PizzaController(
    new PizzaBusiness(
        new PizzaDatabase(),
        new UserDatabase,
        new Authenticator(),
        new IdGenerator()
    )
)

pizzaRouter.get("/", pizzaController.getPizzas)
pizzaRouter.get("/v2", pizzaController.getPizzasV2)
pizzaRouter.post("/insert", pizzaController.insertPizza)
pizzaRouter.delete("/delete", pizzaController.deletePizza)