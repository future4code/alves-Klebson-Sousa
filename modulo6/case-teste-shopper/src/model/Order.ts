export interface IOrderDB {   
    id: string,
    product_name: string,
    quantity: number,
    client_id: string,
}
export interface IPurchaseDTO {    
    productName: string,    
    price: string,    
    quantity: number
}

export class Order {
    constructor(
        private id: string,
        private clientName: string,             
        private deliveryDate: Date,             
        private listPurchases: IPurchaseDTO[]
    ) {}
   
    public getId = () => {
        return this.id
    }
    public removeId = (idToRemove: string) => {
        return this.id !== idToRemove
    }

    public getClientName = () => {
        return this.clientName
    }
    
    public getDeliveryDate = () => {
        return this.deliveryDate
    } 
    public setDeliveryDate = (newDeliveryDate: Date) => {
        return this.deliveryDate = newDeliveryDate
    } 

    public getListPurchases = () => {
        return this.listPurchases
    }      
    public setListPurchases = (newListPurchases: IPurchaseDTO[]) => {
        return this.listPurchases = newListPurchases
    }      
    public addPurchase = (newPurchase: IPurchaseDTO) => {
        return this.listPurchases.push(newPurchase)
    }      
    public removePurchase = (purchaseToRemove: IPurchaseDTO) => {
        return this.listPurchases.filter(purcahse => purcahse !== purchaseToRemove)
    }      
    
}

export interface IOrderInputDTO {
    products: {
        productName: string,    
        quantity: number        
    }[]
}

export interface IPurchasesByUserDTO { 
    orderId: string,
    clientName: string,
    deliveryDate: Date,
    listPurchase: []    
}

export interface IGetPurchasesByUserDTO { 
    orderId: string,
    clientName: string,
    deliveryDate: Date,
    productName: string,
    price: number,
    quantity: number  
}