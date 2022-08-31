import { connection } from "./connection"

export default async function selectDisplayPages(size: number, offset: number):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       LIMIT ${size}
       OFFSET ${offset}
    `)
 
    return result[0]
 }
