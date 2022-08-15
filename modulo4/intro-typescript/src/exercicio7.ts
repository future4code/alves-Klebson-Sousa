const convetDnaparaRna = (letras: string) => {
  const DNA: string = letras;
  const RNA: string = DNA.split("")
    .map((letra: string) => {
      switch (letra) {
        case "A":
          return "U";
        case "T":
          return "A";
        case "C":
          return "G";
        case "G":
          return "C";
      }
      return letra;
    })
    .join("");
  return RNA;
};
console.log(convetDnaparaRna("ATTGCTGCGCATTAACGACGCGTA"))
