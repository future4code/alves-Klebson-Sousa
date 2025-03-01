import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "./types";
import dotenv from "dotenv"
import { verify } from "crypto";

dotenv.config()

class Authenticator {
  
  generateToken(input: AuthenticationData) {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    );
    return token;
  }

  getDataToken = (token: string) => {
    const playload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) 
    return playload as AuthenticationData
  }
}
export default Authenticator
  
