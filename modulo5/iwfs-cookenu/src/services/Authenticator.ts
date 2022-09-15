import { sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../model/types";

dotenv.config()

export class Authenticator {

    generateToken = (payload: authenticationData): string => {
        const token = sign(
            payload,
            process.env.JWT_KEY! as string,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        return token
    }

    getTokenData = (token: string): authenticationData | null => {
        try {
            const {id}= verify(token,process.env.JWT_KEY!) as authenticationData

        return {id}  
        } catch (error) {
            return null
        }
        
    }
}