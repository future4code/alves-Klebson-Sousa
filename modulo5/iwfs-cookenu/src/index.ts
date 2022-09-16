import app from "./app";
import RecipeController from "./endpoints/RecipeController";
import UserController from "./endpoints/UserController";

const userController = new UserController()
const recipeController = new RecipeController()

app.get("/user/profile", userController.getUserProfileLog)
app.get('/user/:id', userController.getUserById)
app.post("/user/signup", userController.signupUser)
app.post('/login', userController.login)

app.post("/recipe/create", recipeController.createRecipe)
app.get("/recipe:id")





