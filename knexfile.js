// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', //drive do banco
    connection: {
      filename: './src/database/db.sqlite' //caminho para o banco
    },
    migrations: { //script que cria a tabela no banco
      directory: './src/database/migrations' //caminho da migrations 
    },
    useNullAsDefault: true //caso nao tenha dados na coluna retorna NULL
  }

};