// 2. Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo 
// da variável.

const tipoVariavel = ((parametro: any): void => {
 if (parametro) {
    console.log(typeof parametro)
 }
})
tipoVariavel("variável")