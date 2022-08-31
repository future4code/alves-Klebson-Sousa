import { connection } from "./connection"

export default async function selectAllUsersOrder(sort:any, order:any):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
      
       ORDER BY ${sort} ${order}
    `)
 
    return result[0]
 }