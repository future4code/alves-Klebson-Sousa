// 2. Crie um arquivo chamado data.ts que exporta um array de produtos. Cada produto 
// será representado por um objeto com propriedades: id (string), name (string) e price 
// (number). Popule manualmente o array com pelo menos 3 produtos.

export type Produtos = {
    id: string,
    name: string,
    price: number
}

export let produtos: Produtos[] = [
    {
        id: "000",
        name: "camisa Polo",
        price: 120
    },
    {
        id: "0b2",
        name: "camisa Regata",
        price: 135
    },
    {
        id: "0b3",
        name: "calça boca de sino",
        price: 150
    },
]