// Exercício 4

// Na aula, vimos que os arquivos escritos em Typescript, com sua extensão `.ts`
// passam por um processo de conversão de typescript para Javascript para que possam ser lidos e executados. Este processo é chamado de **transpilação**.

// Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal.
// O `tsc` é o comando responsável por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript.

// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários
// para responder as questões.

type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse
// arquivo typescript em um arquivo javascript?
// Eu uso o comando tsc no terminal, e o programa cria umma cópia desse arquivo só que 
//.js na pasta build

// c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria 
// diferente? Se sim, descreva as diferenças.
// Acho que não tem diferença, já que faço da mesma forma

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça,
// explique como fazer.
// O que eu sei é que posso criar vários arquivos como eu fiz agora e transpilar 
// de uma só vez com um único comando tsc.