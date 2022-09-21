import { sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { USER_ROLES } from "../model/User";

dotenv.config()

export interface authenticationData {
    id: string
    role: USER_ROLES
 }

export class Authenticator {

    generateToken = (payload: authenticationData): string => {
        const token = sign(
            payload,
            process.env.JWT_KEY! as string,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        return token
    }

    getTokenData = (token: string): authenticationData => {
        try {
            const payload = verify(token,process.env.JWT_KEY!) as authenticationData

        return payload
        } catch (error: any) {
            return error
        }
        
    }
}