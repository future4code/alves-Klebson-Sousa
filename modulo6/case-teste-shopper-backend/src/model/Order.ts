export interface IProductsClientDB {   
    id: string,
    product_name: string,
    quantity: number,
    order_id: string,
}
export interface IPurchaseDTO {    
    productName: string,    
    price: string,    
    quantity: number
}

export class ProductsClient {
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

// export interface IOrderInputDTO { 
//     idOrder: string,
//     productName: string,    
//     quantity: number     
// }
export interface IOrderInputDTO {     
    listPurchase: {
        productName: string,    
        quantity: number
    }[]
}

export interface IlistPurchaseDTO {
    idProduct: string,
    productName: string,
    price: number,
    quantity: number,
    subTotal: number
}

 

export interface IPurchasesByUserDTO { 
    orderId: string,
    clientName: string,
    deliveryDate: Date,
    listPurchase: IlistPurchaseDTO[],
    total: number    
}


export interface IGetPurchasesByUserDTO { 
    orderId: string,
    clientName: string,
    deliveryDate: Date,
    productName: string,
    price: number,
    quantity: number  
}

export interface ICreateOrderOutputDTO {
    message: "Lista criada com sucesso",
    order: {
        id: string,
        products: {
            id: string
            productName: string,    
            quantity: number 
            price:number           
        }[],
        total: number
    }
}