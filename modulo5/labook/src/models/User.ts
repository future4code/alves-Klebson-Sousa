export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES

}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES

    ) {}

    public static mapUsersToFront = (usersDB: IUserDB[]) => {
        return usersDB.map(userDB => {
            const user = new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,                
                userDB.role               
            )

            const userResponse: IGetUsersUser = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }

            return userResponse
        })
    }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }     

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }
    public getRole = () => {
        return this.role
    }
    
}

export interface ISignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface ILoginInputDTO {
    email: string,
    password: string
}
export interface ISignupOutputDTO {
    message: string,
    token: string
}

export interface IGetUsersInputDTO {
    token: string,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetUsersUser {
    id: string,
    name: string,
    email: string
}

export interface IGetUsersOutputDTO {
    users: IGetUsersUser[]
}

export interface IDeleteUserInputDTO {
    token: string,
    idToDelete: string
}

export interface IGetUsersDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IEditUserInputDTO {
    token: string,
    idToEdit: string,
    name: string,
    email: string,
    password: string
}