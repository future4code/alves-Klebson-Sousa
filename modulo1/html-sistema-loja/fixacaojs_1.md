```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  
  let salarioFixo = 2000
  let comissao = (100 * qtdeCarrosVendidos) + (valorTotalVendas * 0.05)
  let slarioFinal = salarioFixo + comissao
  return slarioFinal
}