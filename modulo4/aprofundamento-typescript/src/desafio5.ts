// - Exercício 5

//  Você foi contratado por um escritório médico para organizar a agenda de consultas
type Consultas = {
  nome: string;
  idade: number;
  dataDaConsulta: string;
};

const consultaMarcada: Consultas[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
];

const ordenarConsultas = (consultas: Consultas[]) => {
  const cosultasOrdenadas = consultas.sort((a, b) =>
    a.nome < b.nome ? -1 : 1
  );
  return cosultasOrdenadas;
};
console.table(ordenarConsultas(consultaMarcada));
