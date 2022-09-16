class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
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

  static toUserModel(data: any): User | undefined {
    if(!data) return undefined
    return new User(data.id, data.name, data.email, data.password)
  }
}

export default User;
