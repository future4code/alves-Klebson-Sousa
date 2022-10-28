import {
  IIngredientsDB,
  IPizzaDB,
  IPizzasIngredientsDB,
} from "../../models/Pizza";

// seeds

export const pizzasSeed: IPizzaDB[] = [
  {
    "name": "Margherita",
    "price": 28.9,
    "image_url": "https://i.postimg.cc/pXSNmHS0/marguerita.jpg"
  },
  {
    "name": "Bufala",
    "price": 30.9,
    "image_url": "https://i.postimg.cc/FHKjBtsQ/pizza-Bufala.jpg"
  },
  {
    "name": "Romana",
    "price": 25.9,
    "image_url": "https://i.postimg.cc/T2qg22K6/pizza-Romana.jpg"
  },
  {
    "name": "Diavola",
    "price": 23.8,
    "image_url": "https://i.postimg.cc/LXv97W8r/pizza-Diavola.jpg"
  },
  {
    "name": "4 queijos",
    "price": 22.5,
    "image_url": "https://i.postimg.cc/44SZ9V7b/pizza4-Queijos.jpg"
  },
  {
    "name": "Bianca",
    "price": 22.2,
    "image_url": "https://i.postimg.cc/VkPxqRYM/pizza-Bianca.jpg"
  },
  {
    "name": "Portuguesa",
    "price": 25.8,
    "image_url": "https://i.postimg.cc/rwJqzbSz/pizza-Portuguesa.jpg"
  },
  {
    "name": "Calabreza",
    "price": 25.8,
    "image_url": "https://i.postimg.cc/v8WkQn7Z/pizza-Calabreza.jpg"
  },
  {
    "name": "Alla Moda",
    "price": 23.5,
    "image_url": "https://i.postimg.cc/hGDPrgS9/pizza-Alla-Moda.jpg"
  }
]

export const ingredientsSeed: IIngredientsDB[] = [
  {
    name: "tomato"
  },
  {
    name: "mozzarella"
  },
  {
    name: "mozarella di bufala"
  },
  {
    name: "anchovies"
  },
  {
    name: "oregano"
  },
  {
    name: "oil"
  },
  {
    name: "spicy salami"
  },
  {
    name: "ovo cozido"
  },
  {
    name: "gorgonzola"
  },
  {
    name: "parmesão"
  },
  {
    name: "azeitonas"
  },
  {
    name: "calabresa"
  },
  {
    name: "salaminho Italiano"
  }
];

export const pizzasIngredientsSeed: IPizzasIngredientsDB[] = [
  {
    pizza_name: "Margherita",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "Margherita",
    ingredient_name: "tomato"
  },
  {
    pizza_name: "Margherita",
    ingredient_name: "mozzarella"
  },
  {
    pizza_name: "Bufala",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "Bufala",
    ingredient_name: "tomato"
  },
  {
    pizza_name: "Bufala",
    ingredient_name: "mozarella di bufala"
  },
  {
    pizza_name: "Romana",
    ingredient_name: "tomato"
  },
  {
    pizza_name: "Romana",
    ingredient_name: "mozzarella"
  },
  {
    pizza_name: "Romana",
    ingredient_name: "anchovies"
  },
  {
    pizza_name: "Romana",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "Romana",
    ingredient_name: "oil"
  },
  {
    pizza_name: "Diavola",
    ingredient_name: "tomato"
  },
  {
    pizza_name: "Diavola",
    ingredient_name: "mozzarella"
  },
  {
    pizza_name: "Diavola",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "Diavola",
    ingredient_name: "spicy salami"
  },
  {
    pizza_name: "Bianca",
    ingredient_name: "mozzarella"
  },
  {
    pizza_name: "Bianca",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "4 queijos",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "4 queijos",
    ingredient_name: "mozzarella"
  },
  {
    pizza_name: "4 queijos",
    ingredient_name: "gorgonzola"
  },
  {
    pizza_name: "4 queijos",
    ingredient_name: "parmesão"
  },
  {
    pizza_name: "4 queijos",
    ingredient_name: "provolone"
  },
  {
    pizza_name: "Portuguesa",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "Portuguesa",
    ingredient_name: "mozzarella"
  },
  {
    pizza_name: "Portuguesa",
    ingredient_name: "presunto"
  },
  {
    pizza_name: "Portuguesa",
    ingredient_name: "ovo cozido"
  },
  {
    pizza_name: "Portuguesa",
    ingredient_name: "azeitonas"
  },
  {
    pizza_name: "Calabreza",
    ingredient_name: "parmesão"
  },
  {
    pizza_name: "Calabreza",
    ingredient_name: "calabresa"
  },
  {
    pizza_name: "Calabreza",
    ingredient_name: "oregano"
  },
  {
    pizza_name: "Calabreza",
    ingredient_name: "mozzarella"
  },
  {
    pizza_name: "Alla Moda",
    ingredient_name: "presunto"
  },
  {
    pizza_name: "Alla Moda",
    ingredient_name: "calabresa"
  },
  {
    pizza_name: "Alla Moda",
    ingredient_name: "salaminho Italiano"
  },
  {
    pizza_name: "Alla Moda",
    ingredient_name: "mozzarella"
  }
];
