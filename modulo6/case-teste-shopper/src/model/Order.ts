export interface IOrderDB {   
    id: string,
    product_name: string,
    quantity: number,
    client_id: string,
}

export class ListPurchase {
    constructor(
        private id: string,
        private product_name: string,
        private quantity: number,
        private client_id: string             
    ) {}
   
    public getId = () => {
        return this.id
    }

    public getProduct_name = () => {
        return this.product_name
    }
    
    public setQuantity = () => {
        return this.quantity
    } 

    public getClient_id = () => {
        return this.client_id
    }      
    
}

export interface IListPurchaseDTO {      
    clientName: string,
    deliveryDate: Date,
    productName: string,    
    quantity: number
}