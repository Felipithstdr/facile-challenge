                                ######### Projeto Facile Soluções em sistemas #########

--------------------------------------------------------------------------------------------------------------------
                                      
				      ######### Iniciando com node.js ##########
Para criar um projeto em node.js(levando em consideração que o node.js, já instalado), teremos os seguintes passos:

1º Abra seu CMD ou power shell, percorra até a pasta que deseja salvar, e insira o seguinte comando: "npm install";

Obs: Será criado automaticamente uma pasta node_modules, onde irá ser armazenado todas as bibliotecas.

2º No cmd/power shell, ou até mesmo na sua aplicação de editor de código, contedendo um terminal, desde que esteja
dentro da pasta correspondente a sua aplicação, insira "npm install express", para instalar o framework do node.js;

3º Instalar uma query sql, vamos utilizar o knex, o comando é "npm install knex", após vamos instalr o DB
"npm install pg";

4º Após feito isso, vá no arquivo knexfile.js, la você irá encontrar as configurações para seu DB.
Em development altere para as configurações que coincidem com o seu DB, ou seja versão, host, user, port, password; 

	development: {
		client: 'pg',
		version: '6.1',
		connection: {
			host : '127.0.0.1',
			user : 'postgres',
			port : 5432,
			password : '12345',
			database : 'facile_challenge',
			filename: './src/database/db.pg'
    		},
		migrations: {
			directory: './src/database/migrations'
		}
	},

5º Vamos instalar a biblioteca de criptografar, neste caso vamos utilizar a crypto-js, "npm install crypto-js"

6º Por último já com os arquivos pegos do git, insira npm start para rodar a aplicação.

7º Em meu caso utilizo o app insomnia para realizar testes de back-end, use o mesmo ou de sua preferencia, e
coloque na URL, o link http://localhost:3333/encripts, com o metodo POST, e insira em JSON:
	
	{
		"name": "Faz certo - que da certo!"
	}
Após envie, e irá receber o ID e o name criptografado.

8º Caso insira um nome em branco, irá lhe retornar uma mensagem de erro:
code: "E_VALIDATION_FAILURE", message: "O campo \"name\" é obrigatório" 

9º Para realizar a busca pelo ID, você cria com o metodo GET, lembrando em sua aplicação de teste back-end, e
insira na URL http://localhost:3333/encripts/1 o último número é um exemplo de ID para colocar, e assim envie, o retorno
deve ser, o ID, com o nome descriptografado;

Obs: Caso queira ver todo o banco, basta remover o ID, e mantenha a URL http://localhost:3333/encripts, no metodo
GET;
