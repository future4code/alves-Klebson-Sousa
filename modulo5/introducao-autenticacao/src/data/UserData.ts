import { BaseDataBase } from "./BaseDataBase";

class UserData extends BaseDataBase {
  async insertUser(id: string, email: string, password: string): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
      })
      .into("User");
  }

  async buscaUserPorEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ email });

    return result[0];
  }

  getUserById = async (id: string) => {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ id });     
    return result[0];
  };
}
export default UserData;
