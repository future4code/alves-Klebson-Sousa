

export interface IPizzaDB {
    name: string,
    price: number,
    image_url: string
}

export interface IIngredientsDB {
    name: string
}

export interface IPizzasIngredientsDB {
    pizza_name: string,
    ingredient_name: string
}

export class Pizza {
    constructor(
        private name: string,
        private price: number,
        private imageUrl: string,
        private ingredients: string[]
    ) {}

    public getName = () => {
        return this.name
    }
    
    public getprice = () => {
        return this.price
    }
    
    public getImageUrl = () => {
        return this.imageUrl
    }

    public getIngredients = () => {
        return this.ingredients
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setPrice = (newPrice: number) => {
        this.price = newPrice
    }

    public setImageUrl = (newImageUrl: string) => {
        this.imageUrl = newImageUrl
    }

    public setIngredients = (newIngredients: string[]) => {
        this.ingredients = newIngredients
    }

    public addIngredient = (newIngredient: string) => {
        this.ingredients.push(newIngredient)
    }

    public removeIngredients = (ingredientToremove: string) => {
        return this.ingredients.filter(ingredient => ingredient !== ingredientToremove)
    }
}

export interface IGetPizzasOutputDTO {
    message: string,
    pizzas: {
        name: string,
        price: number,
        imageUrl: string,
        ingredients: string[]
    }[]
}

export interface IInsertPizzaInputDTO {
    name: string,
    price: number,
    imageUrl: string,
    ingredients: {
        name: string
    }[],
    token: string
}

export interface IDeletePizzaInputDTO {
    token: string,
    name: string
}