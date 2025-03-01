import { Address } from "../types"
import connection from "./connection"

const insertAddress = async (address: Address) => {
    await connection("aula_servicos_backend")
    .insert(address)
}
export default insertAddress