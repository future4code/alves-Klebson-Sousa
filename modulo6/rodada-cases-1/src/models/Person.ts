
export interface IPersonDB {
    id: string,
    first_name: string,
    last_name: string,
    participation: number    
}

export class Person {
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private participation: number        
    ) {}

    public getId = () => {
        return this.id
    }

    public getFirstName = () => {
        return this.firstName
    }

    public getLastName = () => {
        return this.lastName
    }

    public getParticipation = () => {
        return this.participation
    }
    
    public setId = (newId: string) => {
        this.id = newId
    }

    public setFirstName = (newFirstName: string) => {
        this.firstName = newFirstName
    }

    public setLastName = (newLastName: string) => {
        this.lastName = newLastName
    }

    public setParticipation = (newParticipation: number) => {
        this.participation = newParticipation
    }

}

export interface IPersonInputDTO {   
    firstName: string,
    lastName: string,
    participation: number 
}

export interface IPersonOutputDTO {
    persons: Person[]
}


export interface IDataOutputDTO {
    message: string     
}
