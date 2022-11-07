export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

  public toUserModel = (userDB: IUserDB) => {
    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    return user;
  };

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getEmail = () => {
    return this.email;
  };

  public getPassword = () => {
    return this.password;
  };

  public getRole = () => {
    return this.role;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setEmail = (newEmail: string) => {
    this.email = newEmail;
  };

  public setPassword = (newPassword: string) => {
    this.password = newPassword;
  };

  public setRole = (newRole: USER_ROLES) => {
    this.role = newRole;
  };
}

export interface ISignupInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface ISignupOutputDTO {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    hasAddress: boolean;
  };
}

export interface IAddressOutputDTO {
  message: string;
  token: string;
  address: {
    id: string;
    street: string;
    number: string;
    neighbourhood: string;
    city: string;
    state: string;
    complement?: string;
    hasAddress: boolean;
  };
}

export interface ILoginInputDTO {
  email: string;
  password: string;
}

export interface ILoginOutputDTO {
  token: string;
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    hasAddress: boolean
  };
}

export interface IGetUsersInputDBDTO {
  search: string;
  order: string;
  sort: string;
  limit: number;
  offset: number;
}

export interface IGetUsersInputDTO {
  token: string;
  search: string;
  order: string;
  sort: string;
  limit: string;
  page: string;
}
