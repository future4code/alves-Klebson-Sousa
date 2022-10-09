import { ClientDatabase } from "../database/ClientDatabase";
import { ConflictError } from "../errors/ConflictError";
import { MissingFields } from "../errors/MissingFields";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { Client, IMessageOutputDTO, ISignupInputDTO } from "../model/Client";
import { IdGenerator } from "../services/IdGenerator";

export class ClientBusiness {
    constructor(
        private clientDatabase: ClientDatabase,
        private idGenerator: IdGenerator
    ) {}

    public signup = async ( input: ISignupInputDTO) => {
        const {name, deliveryDate} = input

        if (!name || !deliveryDate) {
            throw new MissingFields()
        }

        if (typeof name !== "string") {
            throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string")
        }

        const deliveryAtDate = new Date(deliveryDate)        
       
        if (!deliveryAtDate.getDate()) {
            throw new RequestError("Parâmetro 'deliveryDate' inválido: deve ser aaaa/mm/dd")
        }
        
        const deliveryDateAlreadyExists = await this.clientDatabase.findByName(name, deliveryDate)

        if (deliveryDateAlreadyExists) {
            const date = new Date(deliveryDateAlreadyExists.delivery_date)
            const formatDate = new Intl.DateTimeFormat(['ban', 'id']).format(date)            
            const factoringDate = formatDate.split("/")
            const refactoringDate = []
            refactoringDate.push(factoringDate[2],factoringDate[1], factoringDate[0])
            const addingDate = refactoringDate.join("/")
            if (addingDate === deliveryDate) {
                throw new ConflictError("Já existe um pedido para essa data.")
            }
        }

        const id = this.idGenerator.generate()

        const client = new Client(
            id,
            name,
            deliveryAtDate
        )

        await this.clientDatabase.insertClient(client)

        const response: IMessageOutputDTO = {message: "Dados inseridos com sucesso"}

        return response

    }
}