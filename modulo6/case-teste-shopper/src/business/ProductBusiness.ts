import { ProductDatabase } from "../database/ProductDatabase";
import { MissingFields } from "../errors/MissingFields";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { IListPurchaseDTO, ListPurchase } from "../model/Order";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor(
        private productDataBase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}
    public purchaseList = async (input: IListPurchaseDTO) => {
        const { clientName,deliveryDate,productName,quantity } = input

        if (!clientName || !deliveryDate || !productName || !quantity) {
            throw new MissingFields()
        }
        
        if (typeof clientName !== "string") {
            throw new ParamsError("Invalid 'clientName' parameter: must be a string")
        }        

        if (typeof productName !== "string") {
            throw new ParamsError("Invalid 'productName' parameter: must be a string")
        }

        if (typeof quantity !== 'number') {
            throw new ParamsError("Parâmetro 'quantity' inválido: deve ser um número")
        }

        // const isProductAlreadyExists = await this.productDataBase.findByProductName(productName)

        // if (!isProductAlreadyExists) {
        //     throw new NotFoundError("Produto esgotado ou não existe no estoque");
        //   }

        // const id = this.idGenerator.generate()

        // const listProduct = new ListPurchase(
        //     id,
        //     clientName,
        //     deliveryDate,
        //     productName,
        //     quantity
        // )
        // console.log (listProduct)
        
    }
}