# Projeto Lama

## Descrição do Projeto:

Projeto criado com a finalidade de simular um programa onde, é possível centralizar e organizar as informações de shows de um determinado evento em um servidor, que então disponibiliza os dados para o website no front-end. Além de controlar os eventos com suas bandas e datas do show, a aplicação também deve gerenciar os ingressos de cada show. Também implementações como limite de ingressos devido a capacidade do local do evento ser de apenas 5000 pessoas.
Nesse projeto, haverá a construção de uma API que, liga os dados de usuários ao banco de dados, onde pessoas podem se cadastrar e fazerem reservas para um determinado show.

# Funcionalidades do Projeto

Endpoint chamado de signup para cadastrar novos usuários. Ele recebe informações como name, email e password do novo usuário. Em sucesso, ele retorna uma mensagem e também um token de acesso que guarda o id e a role da pessoa ("admin ou normal").

### Validações e Regras de Negócio do endpoint 

- name, email e password devem ser fornecidos e serem do tipo string
- name deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres
- email deve ter um formato válido e único, não podendo repetir no banco de dados

Endpoint chamado de login para logar usuários já cadastrados. Ele recebe o email e o password da pessoa, e em caso de sucesso retorna a mensagem e o token de acesso.

### Validações e Regras de Negócio do endpoint 

- email e password devem ser fornecidos e serem do tipo string
- password deve possuir ao menos 6 caracteres
- email deve ter um formato válido
- O usuário com o e-mail fornecido deve existir no sistema

Endpoint protegido que cria um show. Somente admins podem utilizá-lo.

### Validações e Regras de Negócio do endpoint

- a data do show não pode ser anterior ao início do festival (5 de dezembro)
- só pode existir um show por dia durante o evento

Endpoint público que retorna todos os shows.

### Validações e Regras de Negócio do endpoint

- dentre as informações dos shows vindas do banco de dados, deve existir também o número de ingressos disponíveis de cada um

Endpoint protegido que cria a reserva de um ingresso.

### Validações e Regras de Negócio do endpoint

- id do show reservado deve existir no banco de dados
- uma mesma pessoa só pode reservar um ingresso para cada show
- deve ser respeitado o limite de 5000 ingressos por show

Endpoint protegido que deleta a reserva de um ingresso. A pessoa só pode deletar suas próprias reservas.

### Validações e Regras de Negócio do endpoint

- id do show reservado deve existir no sistema
- a pessoa já deve ter reservado o ingresso

### Foram criados arquivos de testes automatizados e, implementados erros customizados  com classes customizadas que representam erros com atributos como (Atributo statusCode código de erro HTTP) (Atributo message mensagem sobre o erro), para melhor entendimento e funcionamento dos testes.

### O que funciona:
- Todos endpoints propostos no projeto.

### O que não funciona:
- Teste de erro para saber se existe show marcado na mesma data de outro show.

### Tecnologias utilizadas:

## Deploy do projeto:
https://projetolama.herokuapp.com/


