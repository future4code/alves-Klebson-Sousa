```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
   let notas = ["A", "B", "C", "D"]
  let mediaPonderada = (ex + p1 * 2 + p2 * 3) / ((1 + 2 + 3))
    if (mediaPonderada >= 9) {
     return notas[0]
   } else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
     return notas[1]
   } else if (mediaPonderada < 7.5 && mediaPonderada >= 6) {
     return notas[2]
   } else{
     return notas[3]
   }
}