export interface IListPurchaseDB {   
    id: string,
    client_name: string,
    delivery_date: Date,
    product_name: string,    
    quantity: number,
}

export class ListPurchase {
    constructor(
        private id: string,
        private clientName: string,
        private deliveryDate: Date,
        private productName: string,       
        private quantity: number,
    ) {}
   
    public getId = () => {
        return this.id
    }

    public getClientName = () => {
        return this.clientName
    }

    public getDeliveryDate = () => {
        return this.deliveryDate
    }
        
    public getProductName = () => {
        return this.productName
    }

    public setQuantity = () => {
        return this.quantity
    } 
    
}

export interface IListPurchaseDTO {      
    clientName: string,
    deliveryDate: Date,
    productName: string,    
    quantity: number
}