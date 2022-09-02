import app from "./app"
import createProducts from "./endpoints/createProducts"
import createPurchases from "./endpoints/createPurchases"
import createUser from "./endpoints/createUser"
import getAllProducts from "./endpoints/getAllProducts"
import getAllUsers from "./endpoints/getAllUsers"

app.post("/user", createUser)

app.get("/users", getAllUsers)

app.post("/products/create", createProducts)

app.get("/products", getAllProducts)

app.post("/purchases", createPurchases)
