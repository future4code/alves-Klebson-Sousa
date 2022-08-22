// 1. Crie um função que receba uma `string` com o nome e outra `string` com uma data 
// de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e 
// retornar uma `string` no seguinte formato:
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const retornaDataNascimento = (nome: string, data: string): void => {
  const pessoa = nome;
  const formatoData = data.split("/");
  let mes = "";
  switch (formatoData[1]) {
    case "01":
      mes = "Janeiro";
      break;
    case "0":
      mes = "Fevereiro";
      break;
    case "03":
      mes = "Março";
      break;
    case "04":
      mes = "Abril";
      break;
    case "05":
      mes = "Maio";
      break;
    case "06":
      mes = "Junho";
      break;
    case "07":
      mes = "Julho";
      break;
    case "08":
      mes = "Agosto";
      break;
    case "09":
      mes = "Setembro";
      break;
    case "10":
      mes = "Outubro";
      break;
    case "11":
      mes = "Novembro";
      break;
    case "12":
      mes = "Dezembro";
      break;
    default:
      "mês não encontrado";
  }
  console.log(
    `Olá me chamo ${pessoa}, nasci no dia ${formatoData[0]} do mês de ${mes} do ano de ${formatoData[2]}`
  );
};

retornaDataNascimento("Klebson", "07/10/1982");
