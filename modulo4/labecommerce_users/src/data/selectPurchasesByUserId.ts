import { AllPurchases, PurchasesUser } from "../types/typesPurchase";
import { connection } from "./connection";



const selectPurchasesByUserId = async (userId: string): Promise<PurchasesUser | undefined> => {
  const result = await connection.raw(`
    select labecommerce_users.id as idUsuario, labecommerce_users.name as nomeUsuario, 
    labecommerce_products.name as nomeProduto, labecommerce_purchases.id as idCompras, 
    labecommerce_purchases.quantity as quantidade, 
    labecommerce_purchases.total_price as precoTotal
    from labecommerce_purchases
    inner join labecommerce_users 
    on
    labecommerce_purchases.user_id = labecommerce_users.id
    inner join labecommerce_products
    on
    labecommerce_products.id = labecommerce_purchases.product_id
    where labecommerce_users.id = "${userId}"; 
    `);

  let infoPerson: any = {};
  let allPurchases: AllPurchases[] = [];

  result[0].map((person: any) => {
    infoPerson = {
      idUsuario: person.idUsuario,
      nomeUsuario: person.nomeUsuario,
    };

    allPurchases.push({
      idCompras: person.idCompras,
      nomeProduto: person.nomeProduto,
      quantidade: person.quantidade,
      precoTotal: person.precoTotal,
    });
  });

  const allPurchasesUser: PurchasesUser = {
    idUsuario: infoPerson.idUsuario,
    nomeUsuario: infoPerson.nomeUsuario,
    compras: allPurchases
  };
  // console.log({infoPerson})

  return allPurchasesUser
};
export default selectPurchasesByUserId;
