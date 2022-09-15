class Recipes {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private creationDate: string,
    private userId: string
  ) {}

  public getIdUser() {
    return this.userId;
  }
  public getId() {
    return this.id;
  }

  public getEmail() {
    return this.title;
  }

  public getPassword() {
    return this.description;
  }
  public getCreationDate() {
    return this.creationDate;
  }
}

export default Recipes;
