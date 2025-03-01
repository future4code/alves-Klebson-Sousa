import { User } from "../types/typesUsers";
import { connection } from "./connection";

const insertUser = async (user: User): Promise<string> => {
  const newUser: string = await connection("labecommerce_users").insert({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  })
  return newUser
};
export default insertUser;
