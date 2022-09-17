class Recipes {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private creation_Date: Date,
    private userId: string
  ) {}

  public getId() {
    return this.id;
  }
  
  public getTitle() {
    return this.title;
  }
  
  public getDescription() {
    return this.description;
  }
  public getCreationDate() {
    return this.creation_Date;
  }
  public getIdUser() {
    return this.userId;
  }
  public setDate(data: any): void {
    this.creation_Date = data
  }

  static toRecipeModel(data: any): Recipes | undefined {
    if (!data) return undefined;
    return new Recipes(
      data.id,
      data.title,
      data.description,
      data.creation_Date,
      data.userId
    );
  }
}

export default Recipes;
