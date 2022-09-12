## Exercícios:

- Exercício 1
    
    Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
    
    O uso dele é simples, veja abaixo:
    
    ```tsx
    import { v4 } from "uuid"
    
    const id = v4();
    
    console.log("Generated Id: ", id);
    ```
    
    a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
    Sim, pois aumenta mais a segurança dos dados e possibilita a criptografia.
    
    b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.* 
             
  - Exercício 2
    
    Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
    Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:
    
    ```tsx
    const userTableName = "User";
    
    const connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
      },
    });
    
    const createUser = async (id: string, email: string, password: string) => {
      await connection
        .insert({
          id,
          email,
          password,
        })
        .into(userTableName);
    }
    ```
    
    a) *Explique o código acima com as suas palavras.*
    Foi feito uma conexção com o banco de dados onde existe uma tabela userTableName, e criada uma função para criar usuários e inserir na tabela userTableName os usuários criados com as informações de id, email e password.

    b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
    
    c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*
    
    
    
- Exercício 3
    
    Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
    
    - os dados que serão salvos no token (no nosso caso, o id);
    - a chave secreta usada pra criptografar o token;
    - algumas configurações, como o tempo de expiração
    
    Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:
    
    ```tsx
    import * as jwt from "jsonwebtoken";
    
    const expiresIn = "1min"
    
    const generateToken = (id: string): string => {
      const token = jwt.sign(
        {
          id
        },
        process.env.JWT_KEY as string,
        {
          expiresIn
        }
      );
      return token;
    }
    ```
    
    a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
    Confirma que vai vir uma string, se não usarmos ela diz que pode vir undefined.
    
    b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*
    
        
    
- Exercício 4
    
    Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:
    
    - *Verbo/Método*: POST
    - *Path*: `/user/signup`
    - *Input:* O body da requisição deve ser
        
        ```json
        {
        	"email": "email do usuário",
        	"password": "senha do usuário"
        }
        ```
        
    - *Output*: O body da resposta deve ser
        
        ```json
        {
        	"token": "token gerado pelo jwt"
        }
        ```
        
    
    a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
    
    b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
    
    c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
    
    
- Exercício 5
    
    No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. 
    
    a) *Crie uma função que retorne as informações de um usuário a partir do email*
    
       
- Exercício 6
    
    Agora, vamos implementar o endpoint de login, com as seguintes especificações:
    
    - *Verbo/Método*: POST
    - *Path*: `/user/login`
    - *Input:* O body da requisição deve ser
        
        ```json
        {
        	"email": "email do usuário",
        	"password": "senha do usuário"
        }
        ```
        
    - *Output*: O body da resposta deve ser
        
        ```json
        {
        	"token": "token gerado pelo jwt"
        }
        ```
        
    
    a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
    
    b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
    
        
    
- Exercício 7
    
    Ufa, agora temos toda a nossa base pronta para identificar o usuário. Antes de prosseguir, precisamos criar uma função que recebe o token e devolve as informações do usuário salvas nele. Veja o exemplo abaixo:
    
    ```tsx
    const expiresIn = "1min";
    
    const getData = (token: string): AuthenticationData => {
      const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
      const result = {
        id: payload.id,
      };
      return result;
    };
    ```
    
    a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*

    
    b) *Crie uma função que realize a mesma funcionalidade da função acima*
    
        
    
     
    
- Exercício 8
    
    Agora, vamos criar um endpoint que retorne as informações do usuário logado. As especificações dele estão abaixo:
    
    - *Verbo/Método*: GET
    - *Path*: `/user/profile`
    - *Input:* Deve receber, nos headers, o token de autenticação:
        
        ```
        Authorization: token.do.usuario
        ```
        
    - *Output*: O body da resposta deve ser
        
        ```json
        {
        	"id": "id do usuário",
        	"email": "email do usuário"
        }
        ```
        
    
    a) *Comece criando uma função no data que retorne o usuário a partir do id*
    
    b) *Crie o endpoint com as especificações passadas*