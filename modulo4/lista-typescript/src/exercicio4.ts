// 4. O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, 
// setores e se trabalham presencialmente ou por home office:

enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}
type Pessoas = {
    nome: string,
    salário: number, 
    presencial: boolean,
    setor: SETOR   
}

const funcionarios: Pessoas[] = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

// Considerando o `array`acima, crie um `ENUM` para os setores e um `type` para as pessoas 
// colaboradoras. Em seguida, crie uma função que receba este `array`como parâmetro e 
// retorne apenas as pessoas do setor de marketing que trabalham presencialmente.



const pessoasDoMarketing = ((array: any): Pessoas[] => {
    const pessoasMarketing = array.filter((pessoa:any): Pessoas[] => {
        return pessoa.setor === "marketing" && pessoa.presencial
    }).map((pessoa:any) => {
        return pessoa
    })
    return pessoasMarketing
})

console.log(pessoasDoMarketing(funcionarios))