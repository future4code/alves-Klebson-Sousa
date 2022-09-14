import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { verify } from "crypto";
import { USER_ROLES } from "./types";

dotenv.config()

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

class Authenticator {
  
  generateToken(payload: ITokenPayload) {
    const token = jwt.sign(
    payload,
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
    return playload as ITokenPayload
  }
}
export default Authenticator