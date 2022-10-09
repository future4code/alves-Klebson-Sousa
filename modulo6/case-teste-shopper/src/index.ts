import { app } from "./app";
import { BaseDatabase } from "./database/BaseDatabase";
import { clientRouter } from "./router/clientRouter";
import { productRouter } from "./router/productRouter";


app.use("/client", clientRouter)
app.use("/product", productRouter)


// app.get("/products", async (req, res) => {
//     const result = await new BaseDatabase()
//       .connection()
//       .select("*")
//       .from("Products_Stock");
//       res.send(result)
//   });
  