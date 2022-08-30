CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

insert into Actor (id, name, salary, birth_date, gender)
VALUES ("001", "Tony Ramos", 400000, "1948-08-25", "male");

insert into Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "gender");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Virgínea",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Bandeiras",
  300000,
  "1930-10-20", 
  "male"
);



describe Actor;

select name, salary from Actor
where name = "Tony Ramos";

select * from Actor
where gender = "ambos";

-- 3.
-- d)
select id, name, salary from Actor
where salary <= 500000;

-- e) Erro 1054 coluna "nome"  desconhecido
SELECT id, nome from Actor WHERE id = "002";
SELECT id, name from Actor WHERE id = "002";

-- 4.
select name, salary from Actor 
where name LIKE "A%" OR name LIKE "J%" and salary > 300000;
-- a) A query com BETWEEN vai mostrar os valores que estiverem entre dois outros valores, e o not vai negar os valores em questão.

-- b) 
select * from Actor 
where name NOT LIKE "A%" and salary > 350000;

-- C) 
select * from Actor
where name like "%g%";

-- d) 

select * from Actor 
where (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
  -- 5.
  -- a) Query com 5 colunas que representam o id do filme com formato numérico, o nome como string, a sinopse como texto, a data de lançamento e avaliação
  create table Films (
  id int PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    synopsis text(5000),
    launch_date DATE NOT NULL,
    evaluation int
  );

-- b 
insert into Films (id, name, synopsis, launch_date, evaluation)
value (
 1,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

insert into Films (id, name, synopsis, launch_date, evaluation)
value (
 5,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos 
seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
anuncia que vai se casar e não poderá mais morar com ela",
"2000-01-01",
10
);

insert into Films (id, name, synopsis, launch_date, evaluation)
value (
 6,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de 
farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

insert into Films (id, name, synopsis, launch_date, evaluation)
value (
 7,
"À Procura da Felicidade",
"Chris enfrenta sérios problemas financeiros e Linda, sua esposa, decide partir. Ele agora é 
pai solteiro e precisa cuidar de Christopher, seu filho de 5 anos. Chris tenta usar sua 
habilidade como vendedor para conseguir um emprego melhor, mas só consegue um estágio não remunerado",
"2007-02-02",
10
);  



