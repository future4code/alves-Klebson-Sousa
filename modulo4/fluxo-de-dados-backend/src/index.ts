import express, { Request, Response } from "express";
import cors from "cors";
import { produtos, Produtos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Iniciando");
});

// 3.
app.post("/produtos/criar", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      res.statusCode = 404;
      throw new Error("Informe um produto e preço");
    }
    if (typeof name !== "string") {
      throw new Error("O nome do produto é do tipo string");
    }
    if (price !== Number) {
      throw new Error("O preço deve ser do tipo number");
    }
    if (price <= 0) {
      throw new Error("Informe um preço válido");
    }

    const novosProdutos: Produtos = {
      id: Date.now().toString(),
      name: name,
      price: price,
    };
    produtos.push(novosProdutos);
    res.status(201).send(produtos);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// 4.

app.get("/produtos", (req: Request, res: Response) => {
  try {
    const search: string = req.query.search as string;

    if (search) {
      const filtrarProdutos = produtos.filter((product) =>
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      res.status(200).send(filtrarProdutos);
    } else {
      res.send(produtos);
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// 5. Crie um endpoint que edita o preço de um determinado produto e retorna a lista
// de produtos atualizada.

app.put("/editarPreco/:id", (req: Request, res: Response) => {
  try {
    const produtoId = req.params.id;
    const { price, name } = req.body;

    if (!price && !name) {
      res.statusCode = 422;
      throw new Error("Informe um produto e preço");
    }
    if (typeof price !== "number" || typeof name !== "string") {
      res.statusCode = 422;
      throw new Error("O preço deve ser do tipo number e nome string");
    }
    if (price <= 0) {
      res.statusCode = 404;
      throw new Error("Informe um preço maior que zero");
    }

    const produto = produtos.find((prod) => prod.id === produtoId);
    if (produto === undefined) {
      res.statusCode = 404;
      throw new Error("Produto não encontrado");
    }

    //const produto = produtos.find((prod) => prod.id === produtoId);
    //   if (produto) {
    //     produto.price = price;
    //     res.send(produtos);
    //   } else {
    //     res.statusCode = 404;
    //     throw new Error("Informe um produto");
    //   }
    if (!name) {
      produto.price = price;
      res.status(200).send(produtos);
    } else if (!price) {
      produto.name = name;
      res.status(200).send(produtos);
    } else {
      produto.price = price;
      produto.name = name;
      res.status(200).send(produtos);
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// 6. Construa um endpoint que deleta um determinado produto e retorna a lista de
// produtos atualizada.

app.delete("/deletarProduto/:name", (req: Request, res: Response) => {
  try {
    const name = req.params.name.toLocaleLowerCase();

    if (!name) {
      res.statusCode = 404;
      throw new Error("Informe um produto");
    }

    const deleteProduto: Produtos[] = produtos.filter((produto) => {
      return produto.name !== name;
    });
    res.send(deleteProduto);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// 7.

app.listen(3003, () => {
  console.log("O servidor está rodando em http://localhost:3003");
});
