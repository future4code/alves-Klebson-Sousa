function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
```    let contador = 0
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      contador++
    }
  }
  if contador > 0{
  `O número ${numeroEscolhido} aparece ${contador.length}x`
  } else {
  `Número não encontrado`
  }
}