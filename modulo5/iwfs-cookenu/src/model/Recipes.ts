class Recipes {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    // private creationDate: Date,
    private userId: string
  ) {}

  public getIdUser() {
    return this.userId;
  }
  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }
  // public getCreationDate() {
  //   return this.creationDate;
  // }
}

export default Recipes;
