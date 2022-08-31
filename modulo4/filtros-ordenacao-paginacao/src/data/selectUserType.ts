import { connection } from "./connection"


export default async function selectUserType(type: string):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE type LIKE '%${type}%'       
    `)
 
    return result[0]
 }