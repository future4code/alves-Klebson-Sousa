export interface UserDB {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface RecipeDB {
  id: string;
  title: string;
  description: string;
  creation_Date: Date;
  userId: string;
}
