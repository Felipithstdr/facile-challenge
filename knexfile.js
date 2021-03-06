// Update with your config settings.

module.exports = {

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

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

};
