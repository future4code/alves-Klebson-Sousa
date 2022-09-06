import { connection } from "./connection";

export default async function selecFilterOrderPages(
  filter: string, 
  sort: any,
  order: any,
  size: number,
  offset: number
): Promise<any> {
  const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE name LIKE '%${filter}%' OR type LIKE '%${filter}%'
       ORDER BY ${sort} ${order}
       LIMIT ${size}
       OFFSET ${offset}
    `);

  return result[0];
}
