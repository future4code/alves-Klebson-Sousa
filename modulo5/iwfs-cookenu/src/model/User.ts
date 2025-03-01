export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

  public getId() {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }
  public getRole() {
    return this.role;
  }

  static toUserModel(data: any): User | undefined {
    if(!data) return undefined
    return new User(data.id, data.name, data.email, data.password, data.role)
  }
}

export default User;
