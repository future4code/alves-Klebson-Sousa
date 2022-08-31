import { connection } from "./connection";

export default async function selecFilterOrderPages(
  name: string,
  type: string,
  sort: any,
  order: any,
  size: number,
  offset: number
): Promise<any> {
  const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE name LIKE '%${name}%' AND type LIKE '%${type}%'
       ORDER BY ${sort} ${order}
       LIMIT ${size}
       OFFSET ${offset}
    `);

  return result[0];
}
