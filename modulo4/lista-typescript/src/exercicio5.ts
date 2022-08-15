// 5. Considerando o array de usuários abaixo, crie uma função que receba este array como 
// parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

enum ROLE {
	USER = "user",
	ADMIN = "admin"
}

type Users = {
	name: string,
	email: string,
	role: ROLE
}

const pessoas: Users[] = [
	{name: "Rogério", email: "roger@email.com", role:ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

const listaEmails = ((array: Users[]) => {
	const emailAdmin = array.filter((pessoa: Users) => {
		return pessoa.role === "admin"
	}).map((pessoa:Users) => {
		return pessoa.email
	})
	return emailAdmin
})
console.log(listaEmails(pessoas))