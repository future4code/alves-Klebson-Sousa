import { PersonDatabase } from "../database/PersonDatabase"
import { ConflictError } from "../errors/ConflictError"
import { ParamsError } from "../errors/ParamsError"
import { RequestError } from "../errors/RequestError"
import { IDataOutputDTO, IPersonDB, IPersonInputDTO, IPersonOutputDTO, Person } from "../models/Person"
import { IdGenerator } from "../services/IdGenerator"

export class PersonBusiness {
    constructor(
        private personDatabase: PersonDatabase,
        private idGenerator: IdGenerator
    ) {}

    public getPerson = async (): Promise<IPersonOutputDTO> => {
        const personDB: IPersonDB[] = await this.personDatabase.selectPerson()

        const persons = personDB.map((person) => {
            return new Person(
                person.id,
                person.first_name,
                person.last_name,
                person.participation
            )
        })  
        
        const response:IPersonOutputDTO = {
            persons
        }
       
        return response
        
    }

    public insertData = async (input: IPersonInputDTO) => {
        const {firstName, lastName, participation} = input

        if (!firstName || !lastName || !participation) {
            throw new ParamsError("Os campos firstName, lastName e participation são obrigatórios")
        }

        if (typeof firstName !== "string") {
            throw new RequestError("Parâmetro 'firstName' inválido: deve ser uma string")
        }

        if (typeof lastName !== "string") {
            throw new RequestError("Parâmetro 'lastName' inválido: deve ser uma string")
        }
        if (typeof participation !== "number") {
            throw new RequestError("Parâmetro 'participation' inválido: deve ser número")
        }

        const firstNameAlreadyExists = await this.personDatabase.findPersonName(firstName, lastName)

        if (firstNameAlreadyExists) {
            throw new ConflictError("Dados já inseridos")
        }

        const id = this.idGenerator.generate()

        const person = new Person(
            id,
            firstName,
            lastName,
            participation
        )

        await this.personDatabase.insertPerson(person)

        const response: IDataOutputDTO = {
            message: "Dados inseridos com sucesso"
        }
        return response
    }
}