import { connection } from "./connection"


export default async function selectUserName(name: string):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE name LIKE '%${name}%'       
    `)
 
    return result[0]
 }