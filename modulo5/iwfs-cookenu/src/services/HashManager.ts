import { compareSync, genSaltSync, hashSync } from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class HashManager {

    createHash = (plainText: string): string => {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    } 
}
