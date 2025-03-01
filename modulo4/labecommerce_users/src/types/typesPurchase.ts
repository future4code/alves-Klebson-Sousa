export type Purchase = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  totalPrice: number;
};

export type AllPurchases = {
  idCompras: string;
  nomeProduto: string;
  quantidade: number;
  precoTotal: number;
};

export type PurchasesUser = {
  idUsuario: string;
  nomeUsuario: string;
  compras: AllPurchases[];
}