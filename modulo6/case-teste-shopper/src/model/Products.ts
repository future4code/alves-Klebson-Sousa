export interface IProductDB {
    id: number,   
    name: string,
    price: number,
    qty_stock: number
}

export class Product {
    constructor(
        private id: number,   
        private name: string,
        private price: number,
        private qtyStock: number
    ) {}
   
    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getPrice = () => {
        return this.price
    }

    public getQtyStock = () => {
        return this.qtyStock
    }    
    public setQtyStock = () => {
        return this.qtyStock
    }     
}

// export interface IProductsInputDTO {
//     id: number,   
//     name: string,
//     price: number,
//     qty_stock: number
// }

export interface IGetProductsOutputDTO {
    message: string,
    products: Product[]
}

// export interface ILoginInputDTO {
//     email: string,
//     password: string
// }

// export interface ILoginOutputDTO {
//     message: string,
//     token: string
// }