import app from "./app"
import createAddress from "./endpoints/createAddress"
import { getAddress } from "./endpoints/getAddress"

app.get("/address/:cep", getAddress)

app.post("/address/insert/:cep", createAddress)