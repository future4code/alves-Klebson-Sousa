import { connection } from "./connection";
import { PurchasesUser } from "../types/typesPurchase";

const selectUserPurchases = async (userId: string): Promise<any> => {
  const result = await connection("labecommerce_purchases")
    // .select("*")
    .select(
      "labecommerce_users.id as IdPessoa",
      "labecommerce_users.name as NomePessoa",
      "labecommerce_products.name as NomeProduto",
      "labecommerce_purchases.id as IdCompra",
      "labecommerce_purchases.quantity as Quantidade",
      "labecommerce_purchases.total_price as PrecoTotal"
    )
    .innerJoin(
      "labecommerce_users",
      "labecommerce_users.id",
      "labecommerce_purchases.user_id"
    )
    .join(
      "labecommerce_products",
      "labecommerce_purchases.product_id",
      "labecommerce_products.id"
    )
    .where("user_id", userId);

  // const AllUsers: PurchasesUser[] =  []
  // let controller: { [key: string]: number } = {}

  // for(const user of result){
  //     const infoUser: PurchasesUser = {
  //         idUsuario: user.IdPessoa,
  //         nomeUsuario: user.NomePessoa,
  //         compras: []
  //     }
  //     if(user.IdCompra){
  //         infoUser.compras.push({
  //             idCompras: user.IdCompra,
  //             nomeProduto: user.NomeProduto,
  //             quantidade: user.Quantidade,
  //             precoTotal: user.PrecoTotal

  //         })
  //     }
  //     AllUsers.push(infoUser)
  //     console.log("user", user)

  // }

  // console.log("Allusers", AllUsers)
 

  return result;
};
export default selectUserPurchases;
