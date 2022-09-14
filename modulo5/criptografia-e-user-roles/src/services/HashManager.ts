import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

// 1.
// b)

export class HashManager {
    public hash = async (plaintext: string) => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    // c)
    public compare = async (plaintext: string, hash: string) => {
        return bcrypt.compare(plaintext, hash)
    }
}
