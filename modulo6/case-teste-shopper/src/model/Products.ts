export interface IProductsDB {
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

// export interface ISignupInputDTO {
//     name: string,
//     email: string,
//     password: string
// }

// export interface ISignupOutputDTO {
//     message: string,
//     token: string
// }

// export interface ILoginInputDTO {
//     email: string,
//     password: string
// }

// export interface ILoginOutputDTO {
//     message: string,
//     token: string
// }